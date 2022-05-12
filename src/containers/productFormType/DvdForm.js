import React from 'react'

export const DvdForm = ({onChangeSize}) => {
  return (
    <>
      <p>Please Provide Size</p>
      <label>
        <span>Size (MB):</span>
        <input type="number" name="DVD" id="dvd" onChange={onChangeSize} />
      </label>
      <p>*product description</p>
    </>
  )
}
