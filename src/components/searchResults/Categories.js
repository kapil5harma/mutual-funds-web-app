import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';
// import Tabs from './Tabs';
import * as actions from '../../store/actions/actions';
import Card from './Card';

class Categories extends Component {
  state = {
    fund1: {},
    fund2: {},
    fund3: {},
    fund4: {},
    selectedFunds: {}
  };
  // componentDidMount() {
  //   if (!this.props.searchResults.length) this.props.onFetchCategories();
  // }

  objectIsEmpty = obj => {
    if (Object.keys(obj).length === 0 && obj.constructor === Object) {
      return true;
    }
  };

  getSelectedFunds = () => {
    console.log('getSelectedFunds');
    let selected = {};
    if (!this.objectIsEmpty(this.state.fund1))
      selected = { ...selected, fund1: { ...this.state.fund1 } };
    if (!this.objectIsEmpty(this.state.fund2))
      selected = { ...selected, fund2: { ...this.state.fund2 } };
    if (!this.objectIsEmpty(this.state.fund3))
      selected = { ...selected, fund3: { ...this.state.fund3 } };
    if (!this.objectIsEmpty(this.state.fund4))
      selected = { ...selected, fund4: { ...this.state.fund4 } };
    // console.log('selected: ', selected);
    // this.setState({ selectedFunds: { ...selected } });
    return selected;
  };

  checkIfMinimum2AreSelected = () => {
    if (
      (!this.objectIsEmpty(this.state.fund1) &&
        !this.objectIsEmpty(this.state.fund2)) ||
      (!this.objectIsEmpty(this.state.fund1) &&
        !this.objectIsEmpty(this.state.fund3)) ||
      (!this.objectIsEmpty(this.state.fund1) &&
        !this.objectIsEmpty(this.state.fund4)) ||
      (!this.objectIsEmpty(this.state.fund2) &&
        !this.objectIsEmpty(this.state.fund3)) ||
      (!this.objectIsEmpty(this.state.fund2) &&
        !this.objectIsEmpty(this.state.fund4)) ||
      (!this.objectIsEmpty(this.state.fund3) &&
        !this.objectIsEmpty(this.state.fund4))
    )
      return true;
    else return false;
  };

  compare = () => {
    const selectedFunds = this.getSelectedFunds();
    this.props.history.push({
      pathname: 'compare',
      state: { ...selectedFunds }
    });
  };

  handleClick = (id, key) => {
    const elem = document.getElementById(id);
    const { fund1, fund2, fund3, fund4 } = this.state;
    if (
      !this.objectIsEmpty(fund1) &&
      !this.objectIsEmpty(fund2) &&
      !this.objectIsEmpty(fund3) &&
      !this.objectIsEmpty(fund4) &&
      (id !== this.state.fund1.id &&
        id !== this.state.fund2.id &&
        id !== this.state.fund3.id &&
        id !== this.state.fund4.id)
    ) {
      return;
    }
    elem.checked = !elem.checked;
    if (id === this.state.fund1.id) {
      this.setState({ fund1: {} });
    } else if (id === this.state.fund2.id) {
      this.setState({ fund2: {} });
    } else if (id === this.state.fund3.id) {
      this.setState({ fund3: {} });
    } else if (id === this.state.fund4.id) {
      this.setState({ fund4: {} });
    }
    if (elem.checked && this.objectIsEmpty(fund1)) {
      this.setState({ fund1: { id: id, key: key } });
    } else if (elem.checked && this.objectIsEmpty(fund2)) {
      this.setState({ fund2: { id, key } });
    } else if (elem.checked && this.objectIsEmpty(fund3)) {
      this.setState({ fund3: { id, key } });
    } else if (elem.checked && this.objectIsEmpty(fund4)) {
      this.setState({ fund4: { id, key } });
    }
  };

  render() {
    if (this.props.loading) return <Spinner />;
    return (
      <div>
        <Card clicked={(x, y) => this.handleClick(x, y)} />
        );
        {/* Compare button */}
        {this.checkIfMinimum2AreSelected() ? (
          <button className='compare-btn' onClick={() => this.compare()}>
            Compare Funds (min 2 & max 4)
          </button>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults.searchResults
  };
};

export default connect(
  mapStateToProps,
  null
)(Categories);
