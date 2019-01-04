import React, { Component, Fragment } from 'react';
import * as actions from '../../store/actions/actions';
import { connect } from 'react-redux';

class Card extends Component {
  state = {
    fund1: {},
    fund2: {}
  };

  compare = (fund1, fund2) => {
    // console.log('fund1: ', fund1);
    // console.log('fund2: ', fund2);
  };
  objectIsEmpty = obj => {
    if (Object.keys(obj).length === 0 && obj.constructor === Object) {
      return true;
    }
  };

  handleClick = (id, key) => {
    // console.log('this.state: ', this.state);
    const elem = document.getElementById(id);
    const { fund1, fund2 } = this.state;
    if (
      !this.objectIsEmpty(fund1) &&
      !this.objectIsEmpty(fund2) &&
      (id !== this.state.fund1.id && id !== this.state.fund2.id)
    ) {
      return;
    }
    elem.checked = !elem.checked;
    if (id === this.state.fund1.id) {
      this.setState({ fund1: {} });
    } else if (id === this.state.fund2.id) {
      this.setState({ fund2: {} });
    }
    if (elem.checked && this.objectIsEmpty(fund1)) {
      this.setState({ fund1: { id: id, key: key } });
    } else if (elem.checked && this.objectIsEmpty(fund2)) {
      this.setState({ fund2: { id, key } });
    }
  };

  render() {
    // console.log('this.props: ', this.props);
    return (
      <Fragment>
        {this.props.funds.map(fund => (
          <div
            key={fund.id}
            className='card'
            onClick={() => this.handleClick(fund.id, fund.details_id)}
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
        ))}
        {!this.objectIsEmpty(this.state.fund1) &&
        !this.objectIsEmpty(this.state.fund2) ? (
          <button
            className='compare-btn'
            onClick={() => this.compare(this.state.fund1, this.state.fund2)}
          >
            Compare 2 Funds
          </button>
        ) : null}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchFundDetails: route => dispatch(actions.fetchFundDetails(route))
});

export default connect(
  null,
  mapDispatchToProps
)(Card);
