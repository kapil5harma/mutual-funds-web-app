import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='bg-dark text-white p-4 text-center'>
        Copyright &copy; {new Date().getFullYear()} |{' '}
        <a
          href='https://www.kapil5harma.com/#/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: '#ccc' }}
        >
          Kapil Sharma
        </a>{' '}
        <br /> Powered by React & Redux
      </footer>
    );
  }
}

export default Footer;
