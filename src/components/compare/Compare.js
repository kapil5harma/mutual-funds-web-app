import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/actions';
import Spinner from '../Spinner/Spinner';
import ComparisonTable from './ComparisonTable';

const objectIsEmpty = obj => {
  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    return true;
  }
};

class Compare extends Component {
  componentDidMount = () => {
    let keys = {};
    Object.keys(this.props.location.state).map(key => {
      keys = { ...keys, [key]: this.props.location.state[key].key };
      return null;
    });
    this.props.onFetchFundDetails(keys);
  };

  render() {
    const { fund1, fund2, fund3, fund4 } = this.props.searchResults;

    return !objectIsEmpty(fund1) ||
      !objectIsEmpty(fund2) ||
      !objectIsEmpty(fund3) ||
      !objectIsEmpty(fund4) ? (
      <ComparisonTable
        fund1={fund1}
        fund2={fund2}
        fund3={fund3}
        fund4={fund4}
      />
    ) : (
      <Spinner />
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults
});

const mapDispatchToProps = dispatch => ({
  onFetchFundDetails: (key1, key2) =>
    dispatch(actions.fetchFundDetails(key1, key2))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Compare));
