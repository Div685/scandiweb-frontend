import React from 'react'

const Header = ({ handleSubmit, handleClear, title, firstBtn, secondBtn }) => {

  return (
    <header>
      <h3 className="title"> {title} </h3>
      <div className="header__button">
        <button type="submit" onClick={handleSubmit}> {firstBtn} </button>
        <button type="submit" onClick={handleClear} className="delete-checkbox"> {secondBtn} </button>
      </div>
    </header>
  )
}

export default Header
