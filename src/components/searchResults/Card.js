import React, { Component, Fragment } from 'react';
import * as actions from '../../store/actions/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Card extends Component {
  state = {
    filteredFunds: [],
    searchParameter: '',
    min: -1,
    max: -1
  };

  componentDidMount = () => {
    const search = '';
    const filters = {};
    if (!this.props.funds.length) this.props.onFetchCategories(search, filters);
    if (this.props.funds.length)
      this.setState({ filteredFunds: this.props.funds });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.funds.length !== this.props.funds.length) {
      this.setState({ filteredFunds: this.props.funds });
    }
  };

  handleClick = () => {
    const search = this.state.searchParameter;
    const filters = {
      min: this.state.min,
      max: this.state.max
    };
    this.props.onFetchCategories(search, filters);
  };

  handleSearch = event => {
    let value = event.target.value;
    if (value.length === 0) {
      this.setState({ searchParameter: '' });
    }
    if (value.length > 2) {
      this.setState({ searchParameter: value });
    }
  };

  handleChange = (event, minMax) => {
    let value = event.target.value;
    if (minMax === 0 && value.length === 0) {
      this.setState({ min: -1 });
    }
    if (minMax === 1 && value.length === 0) {
      this.setState({ max: -1 });
    }
    if (minMax === 0 && value >= 100 && value <= 25000) {
      this.setState({ min: value });
    }
    if (minMax === 1 && value >= 100 && value <= 25000) {
      this.setState({ max: value });
    }
  };

  render() {
    let list = this.state.filteredFunds.map(fund => {
      return (
        <Fragment key={fund.id}>
          <div
            key={fund.id}
            className='card'
            onClick={() => this.props.clicked(fund.id, fund.details_id)}
          >
            <div className='name-and-rating'>
              <b>{fund.name}</b>
            </div>
            <div className='rating'>
              Rating:{' '}
              <span
                style={
                  fund.rating >= 4
                    ? { color: 'green' }
                    : fund.rating >= 2
                    ? { color: 'orange' }
                    : { color: 'red' }
                }
              >
                {fund.rating}
              </span>
            </div>
            <div className='rating'>
              Risk: <span>{fund.riskometer}</span>
            </div>
            <div className='return'>
              Returns:
              <div>
                <div>3-year</div>
                <div
                  style={
                    fund.return_3yr > 0 ? { color: 'green' } : { color: 'red' }
                  }
                >
                  {fund.return_3yr}%
                </div>
              </div>
              <div>
                <div>5-year</div>
                <div
                  style={
                    fund.return_5yr > 0 ? { color: 'green' } : { color: 'red' }
                  }
                >
                  {fund.return_5yr}%
                </div>
              </div>
            </div>
            <input id={fund.id} type='checkbox' />
          </div>
        </Fragment>
      );
    });

    return (
      <Fragment>
        <div className='search-and-filters'>
          <div id='Search'>
            <input
              type='text'
              placeholder='Search MFs'
              onChange={e => this.handleSearch(e)}
            />
          </div>
          <div className='filters'>
            <input
              type='text'
              placeholder='Enter Min Investment (min 100)'
              onChange={e => this.handleChange(e, 0)}
            />
            <input
              type='text'
              placeholder='Enter Max Investment (max 25000)'
              onChange={e => this.handleChange(e, 1)}
            />
          </div>
          <div className='button-container'>
            <button onClick={() => this.handleClick()}>
              Filter and/or Search
            </button>
          </div>
        </div>
        {list}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  funds: state.searchResults.searchResults
});

const mapDispatchToProps = dispatch => ({
  onFetchCategories: (search, filters) =>
    dispatch(actions.fetchCategories(search, filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Card));
