import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/actions';

class SearchBar extends React.Component {
  render() {
    const handleInputChange = event => {
      console.log('this.props: ', this.props);
      const token = 'a41d2b39e3b47412504509bb5a1b66498fb1f43a';
      const config = {
        headers: { Authorization: 'Token ' + token }
      };
      let enteredText = event.target.value;
      console.log('enteredText: ', enteredText);
      if (enteredText) {
        let url = `https://api.piggy.co.in/v2/mf/search/`;
        axios
          .post(
            url,
            {
              search: enteredText
              // filters: { minimum_investments: 200, maximum_investments: 1000 }
            },
            config
          )
          .then(response => {
            this.props.searchedFund(response.data.data.search_results);
          });
      }
    };

    return (
      <div id='Search'>
        <input placeholder='Search' onKeyUp={e => handleInputChange(e)} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchedFund: res => dispatch(actions.searchedFund(res))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(SearchBar));
