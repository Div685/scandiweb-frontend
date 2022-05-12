import React, { useState } from 'react'
import Header from '../components/Header';
import BookForm from './productFormType/BookForm';
import { DvdForm } from './productFormType/DvdForm';
import FurnitureForm from './productFormType/FurnitureForm';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {

  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [switcher, setSwitcher] = useState("");
  const [errorNotification, setErrorNotification] = useState("");
  let navigate = useNavigate();
  
  // Book
  const [bWeight, setBWeight] = useState("");
  // Furniture
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");

  // color error
  const [color, setColor] = useState("");
  
  // Size
  const [size, setSize] = useState("");
  
  const [proType, setProType] = useState(<DvdForm onChangeSize={(e) => { setSize(e.target.value)}} />);
  
  const onHandleChangeHeight = (e) => {
    setHeight(e.target.value);
  }
  const onHandleWeight = (e) => {
    setWeight(e.target.value);
  }
  const onHandleLength = (e) => {
    setLength(e.target.value); 
  }

  const firstBtn = "Save";

  const handleSubmit = () => {
    return onSubmitForm();
  }

  const onHandleChange = (e) => {
    let values = e.target.value;
    if(values === "Dvd") {
      setProType(<DvdForm onChangeSize={(e) => { setSize(e.target.value)}} />);
    } else if (values === "Book") {
      setProType(<BookForm onChangeWeight={(e) => { setBWeight(e.target.value)}} />);
    } else if (values === "Furniture") {
      setProType(<FurnitureForm 
        onHandleChangeHeight={onHandleChangeHeight}
        onHandleWeight={onHandleWeight} 
        onHandleLength={onHandleLength} />);
    }
    // setSwitcher(values);
  }

  const handleClear = () => {
    setSku("");
    setName("");
    setPrice("");
    setSize("");
    setBWeight("");
    setHeight("");
    setWeight("");
    setLength("");
    let path = '/';
    navigate(path);
  }

  const onSubmitForm = () => {
    if (sku === "" || name === "" || price === "") {
      setErrorNotification("Please submit required data");
      setColor("border border-danger")
    }
    if (proType.type.name === "DvdForm" && size === "") {
      setErrorNotification("Please submit required data")
    }if (proType.type.name === "BookForm" && bWeight === "") {
      setErrorNotification("Please submit required data")
    }
    if (proType.type.name === "FurnitureForm" && height === "" || weight === "" || length === "" ) {
      setErrorNotification("Please submit required data");
    }
    console.log(sku, name, price, height, weight, length, bWeight, size );

  }

  return (
    <main>
      <Header handleSubmit={handleSubmit} handleClear={handleClear} title="Product Add" firstBtn={firstBtn} secondBtn="Cancel" />
      <form onSubmit={onSubmitForm} id="product_form">

        {errorNotification}
        <label>
          <span>
            SKU: 
          </span>
          <input
            type="text"
            className={color} 
            name="sku" 
            id="sku" 
            value={sku} 
            onChange={(event) => { setSku(event.target.value); }} />
        </label>
        <label>
          <span>Name: </span>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={name} 
            onChange={(event) => { setName(event.target.value); }}/>
        </label>


        <label>
          <span>Price ($): </span>
          <input 
            type="text" 
            name="price" 
            id="price" 
            value={price} 
            onChange={(event) => { setPrice(event.target.value); }}/>
        </label>
        <label>
          <span>Type Switcher:</span>
          <select  id="productType" onChange={onHandleChange}>
            <option value="Dvd">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </select>
        </label>

        <div className="product__types">
          { proType }
        </div>

      </form>
    </main>
  )
}

export default ProductForm;
