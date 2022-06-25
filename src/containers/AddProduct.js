import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ProductForm from './ProductForm';
import { insertData } from '../api/fetch';

const AddProduct = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const path = '/';
  const firstBtn = 'Save';

  const handleCancel = () => {
    navigate(path);
  };

  const onHandleSubmitForm = async (sku, name, price, measure) => {
    try {
      const response = await insertData(sku, name, price, measure);
      if (response.status === 'created') {
        setMessage('SuccessFully Created User!');
        navigate(path);
      } else {
        setMessage(response.message);
      }
    } catch {
      setMessage('Sorry, Insertion Data failed!');
    }
  };

  const onSubmitForm = (sku, name, price, measure) => {
    onHandleSubmitForm(sku, name, price, measure);
  };

  return (
    <main>
      <Header
        handleSubmit={onSubmitForm}
        handleClear={handleCancel}
        title="Product Add"
        firstBtn={firstBtn}
        secondBtn="Cancel"
      />
      {message && <p className="error-msg d-flex p-3 justify-content-center bg-danger text-white">{message}</p>}
      <ProductForm handleSubmit={onSubmitForm} />
    </main>
  );
};

export default AddProduct;
