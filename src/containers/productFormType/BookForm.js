import React from 'react'

const BookForm = ({onChangeWeight}) => {

  return (
    <>
      <label>
        Weight (KG): 
        <input type="number" name="book" id="book" onChange={onChangeWeight} />
      </label>
      <span>*product description</span>
    </>
  )
}

export default BookForm
