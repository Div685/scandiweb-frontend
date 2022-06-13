import React from 'react'

const Product = ({ item, onCheckBoxChange }) => {
  const {pid, SKU, Name, Price, Measure} = item;

  return (
    <div className="items-data" key={SKU}>
      <form method="post">
        <input className="delete-checkbox" 
          type="checkbox"
          value={pid}
          name="checkbox[]" 
          id="checkbox"
          // checked={onChecked}
          onChange={ 
            onCheckBoxChange
          }
          />
        <p className="sku"> {SKU} </p>
        <p className="name">{Name}</p>
        <p className="price"> {Price} $</p>
        <p className="measure"> {Measure} </p>
      </form>
    </div>
  )
}

export default Product
