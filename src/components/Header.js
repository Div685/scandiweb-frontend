import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  handleSubmit, handleClear, title, firstBtn, secondBtn,
}) => (
  <header>
    <h3 className="title">
      {' '}
      {title}
      {' '}
    </h3>
    <div className="header__button">
      <button type="submit" onClick={handleSubmit}>
        {' '}
        {firstBtn}
        {' '}
      </button>
      <button type="submit" onClick={handleClear}>
        {' '}
        {secondBtn}
        {' '}
      </button>
    </div>
  </header>
);

Header.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  firstBtn: PropTypes.string.isRequired,
  secondBtn: PropTypes.string.isRequired,
};

export default Header;
