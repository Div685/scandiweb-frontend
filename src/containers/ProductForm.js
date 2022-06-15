import React, { useState } from 'react'
import Header from '../components/Header';
import BookForm from './productFormType/BookForm';
import DvdForm from './productFormType/DvdForm';
import FurnitureForm from './productFormType/FurnitureForm';
import { useNavigate } from 'react-router-dom';
import { insertData } from '../api/fetch';

const ProductForm = () => {

  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.00);
  const [errorNotification, setErrorNotification] = useState("");
  const [message, setMessage] = useState('');
  let navigate = useNavigate();
  let path = '/';
  const firstBtn = "Save";
  
  // Book
  const [bWeight, setBWeight] = useState("");
  // Furniture
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if(sku === '' || sku.length === 0) {
      setMessage('Please Input SKU data');
      return;
    }
    if (name === '' || name.length === 0) {
      setMessage('Please Input Name');
      return;
    }
    if (price === '' || price === null) {
      setMessage('Price Can not be empty');
      return;
    }

    if (proType.type.name === "DvdForm") {
      if (size === "") {
        setErrorNotification("Please Submit required data");
        return;
      }
    }

    if (proType.type.name === "BookForm" && bWeight === "") {
      setErrorNotification("Please submit required data");
      return;
    }

    if ((proType.type.name === "FurnitureForm") && ((height === "" || weight === "") || length === "") ) {
      setErrorNotification("Please submit required data");
      return;
    }

    onSubmitForm(e);
  }

  const onHandleChange = (e) => {
    let values = e.target.value;
    if(values === "Dvd") {
      setProType(<DvdForm onChangeSize={(e) => { setSize(e.target.value) }} />);
    } else if (values === "Book") {
      setProType(<BookForm onChangeWeight={(e) => { setBWeight(e.target.value)}} />);
    } else if (values === "Furniture") {
      setProType(<FurnitureForm 
        onHandleChangeHeight={onHandleChangeHeight}
        onHandleWeight={onHandleWeight} 
        onHandleLength={onHandleLength} />);
    } 
  }

  const handleClear = () => {
    navigate(path);
  }

  const onSubmitData = async (sku, name, price, measure) => {
    try {
      let response = await insertData(sku, name, price, measure);
      if (response.message === 'Product Created!') {
        navigate(path);
      } else {
        setErrorNotification(response.message);
      }
    }catch {
      setErrorNotification('Sorry, Insertion Data failed!');
    }
    
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    let measures;
    if (proType.type.name === 'DvdForm') {
      measures = ('Size: ' + size + ' MB');
    } else if (proType.type.name === 'BookForm') {
      measures = ('Weight: '+ bWeight + ' KG');
    } else if (proType.type.name === 'FurnitureForm') {
      measures = ('Dimension: ' + height + 'x' + weight + 'x' + length);
    }
    onSubmitData(sku, name, parseFloat(price), measures);
  }

  return (
    <main>
      <Header handleSubmit={handleSubmit} handleClear={handleClear} title="Product Add" firstBtn={firstBtn} secondBtn="Cancel" />
      <form method="post" id="product_form">

        {errorNotification}
        {message}
        <label>
          <span>
            SKU: 
          </span>
          <input
            type="text"
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
            type="number" 
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
