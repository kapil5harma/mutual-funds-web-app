import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import Tabs from './Tabs';
import * as actions from '../../store/actions/actions';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      searchResults: []
    };
  }

  componentWillMount() {
    let route = this.props.location.pathname;
    this.props.onFetchCategories(route);
  }

  componentWillReceiveProps = nextProps => {
    let route = nextProps.location.pathname;
    if (route !== this.props.location.pathname) {
      this.props.onFetchCategories(route);
    }
  };

  render() {
    if (this.props.loading) return <Spinner />;

    const equityFunds = this.props.searchResults
      .filter(res => res.category === 'equity')
      .map(data => data);

    const debtFunds = this.props.searchResults
      .filter(res => res.category === 'debt')
      .map(data => data);

    const hybridFunds = this.props.searchResults
      .filter(res => res.category === 'hybrid')
      .map(data => data);

    return (
      <Tabs
        categories={{
          equityFunds,
          debtFunds,
          hybridFunds
        }}
      />
    );
  }
}

Categories.propTypes = {
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  // console.log('state: ', state);
  return {
    searchResults: state.searchResults.searchResults,
    loading: state.searchResults.loading
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchCategories: route => dispatch(actions.fetchCategories(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
