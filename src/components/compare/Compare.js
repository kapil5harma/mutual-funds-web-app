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
    const { fund1, fund2 } = this.props.location.state;
    this.props.onFetchFundDetails(fund1.key, fund2.key);
  };

  render() {
    let fund1 = null;
    let fund2 = null;
    if (
      !objectIsEmpty(this.props.searchResults.fund1) &&
      !objectIsEmpty(this.props.searchResults.fund2)
    ) {
      fund1 = this.props.searchResults.fund1;
      fund2 = this.props.searchResults.fund2;
    }

    return fund1 && fund1.details && fund2 && fund2.details ? (
      <ComparisonTable fund1={{ ...fund1 }} fund2={{ ...fund2 }} />
    ) : (
      <Spinner />
    );
  }
}

const mapStateToProps = state => {
  console.log('state: ', state);
  return {
    searchResults: state.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  console.log('dispatch: ', dispatch);
  return {
    onFetchFundDetails: (key1, key2) =>
      dispatch(actions.fetchFundDetails(key1, key2))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Compare));
