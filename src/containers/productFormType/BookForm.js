import React from 'react'

const BookForm = ({onChangeWeight}) => {

  return (
    <>
      <p>Please Provide Weight</p>
      <label>
        <span>Weight (KG):</span>
        <input type="number" name="book" id="book" onChange={onChangeWeight} />
      </label>
      <p>*product description</p>
    </>
  )
}

export default BookForm
