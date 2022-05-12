import React from 'react'


const FurnitureForm = ({onHandleChangeHeight, onHandleWeight, onHandleLength}) => {

  return (
    <div>
      <p>Please Provide a dimensions in HxWxL format</p>
      <label >
        <span>Height (CM):</span>
        <input 
          type="number" 
          name="height" 
          id="height" 
          onChange={onHandleChangeHeight} />
      </label>
      <label >
      <span>Width (CM):</span>
        <input 
          type="number" 
          name="width" 
          id="width"
          onChange={onHandleWeight}/>
      </label>
      <label >
        <span>Length (CM):</span>
        <input 
          type="number" 
          name="length" 
          id="length"
          onChange={onHandleLength}/>
          
      </label>
      
      <p>*product description</p>
    </div>
  )
}

export default FurnitureForm
