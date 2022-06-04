import React from 'react'

const DvdForm = ({onChangeSize}) => {
  return (
    <>
      <p>Please Provide Size</p>
      <label>
        <span>Size (MB):</span>
        <input type="number" name="DVD" id="size" onChange={onChangeSize} />
      </label>
      <p>*product description</p>
    </>
  )
}

export default DvdForm;