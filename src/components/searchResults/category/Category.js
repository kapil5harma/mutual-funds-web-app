import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

// import PropTypes from 'prop-types';

class Article extends Component {
  render() {
    console.log('this.props: ', this.props);
    return (
      <div className='HorizontalList'>
        <HorizontalScroll reverseScroll={false} style={{ height: '120px' }}>
          {this.props.items.map(item => {
            return <img key={item.name} alt={item.name} src={item.thumb} />;
          })}
        </HorizontalScroll>
      </div>
    );
  }
}

Article.propTypes = {
  // url: PropTypes.string,
  // urlToImage: PropTypes.string,
  // title: PropTypes.string,
  // description: PropTypes.string
};

export default Article;
