import React, { useState } from 'react'
import Header from '../components/Header'
import ProductForm from './ProductForm'
import { useNavigate } from 'react-router-dom';
import { insertData } from '../api/fetch';


const AddProduct = () => {

  const [message, setMessage] = useState('');
  let navigate = useNavigate();
  let path = '/';
  const firstBtn = "Save";

  const handleCancel = () => {
    navigate(path);
  }

  // const handleSubmit = () => {
  //   return onSubmitForm();
  // }

  const onSubmitForm = (sku, name, price, measure) => {
    onHandleSubmitForm(sku, name, price, measure);
  }

  const onHandleSubmitForm = async (sku, name, price, measure) => {
    try {
      const response = await insertData(sku, name, price, measure);
      console.log(sku, name, price, measure);
      if (response.status === 'created') {
        setMessage('SuccessFully Created User!');
        navigate(path);
      } else {
        setMessage(response.message);
      }
    }catch {
      setMessage('Sorry, Insertion Data failed!');
    }
  }

  return (
    <main>
      <Header handleSubmit={onSubmitForm} 
        handleClear={handleCancel} 
        title="Product Add" 
        firstBtn={firstBtn} 
        secondBtn="Cancel" />
      {message && <p className="error-msg d-flex p-3 justify-content-center bg-danger text-white">{message}</p>}
      <ProductForm handleSubmit={onSubmitForm} />
    </main>
  )
}

export default AddProduct
