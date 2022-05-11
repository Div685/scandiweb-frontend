import React from 'react'


const FurnitureForm = ({onHandleChangeHeight, onHandleWeight, onHandleLength}) => {

  return (
    <div>
      <p>Please Provide a dimensions in HxWxL format</p>
      <label >
        Height (CM):
        <input 
          type="number" 
          name="height" 
          id="height" 
          onChange={onHandleChangeHeight} />
      </label>
      <label >
        Width (CM):
        <input 
          type="number" 
          name="width" 
          id="width"
          onChange={onHandleWeight}/>
      </label>
      <label >
        Length (CM):
        <input 
          type="number" 
          name="length" 
          id="length"
          onChange={onHandleLength}/>
          
      </label>
      
      <span>*product description</span>
    </div>
  )
}

export default FurnitureForm
