import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Collapse, Button } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const headerStyle = {
      background: '#343a40',
      color: '#fff',
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    return (
      <div className='Header' style={headerStyle}>
        <h2 className='heading text-center p-4 mb-0'>
          <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
            Piggy Assignment
          </Link>
        </h2>
      </div>
    );
  }
}

export default Header;
