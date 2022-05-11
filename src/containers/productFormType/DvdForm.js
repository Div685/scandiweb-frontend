import React from 'react'

export const DvdForm = ({onChangeSize}) => {
  return (
    <>
      <label>
        Size (MB): 
        <input type="number" name="DVD" id="dvd" onChange={onChangeSize} />
      </label>
      <span>*product description</span>
    </>
  )
}
