import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteData, getData } from '../api/fetch';
import Header from '../components/Header';
import Product from '../components/Product';

const ProductList = () => {
  const [itemData, setItemData] = useState([]);
  const [productState, setProductState] = useState([]);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const firstBtn = 'ADD';
  const secondBtn = 'MASS DELETE';

  const handleSubmit = () => {
    const path = '/add-product';
    navigate(path);
  };

  const fetchProduct = () => {
    const requestData = getData();
    requestData.then((data) => {
      setItemData(data.data);
      return data;
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleClear = async () => {
    if (productState.length > 0) {
      const pS = productState.toString();
      const data = new FormData();
      data.append('checkbox[]', [pS]);
      const req = await deleteData(data);
      if (req.data.message === 'Product Deleted!') {
        fetchProduct();
      } else {
        setMessage(req.message);
      }
    } else {
      setMessage('Please Select Item to delete');
    }
  };

  const toggleOne = (checked, id) => {
    if (checked) {
      setProductState(productState.concat([id]));
    } else {
      setProductState(productState.filter((el) => el !== id));
    }
  };

  const onCheckBoxChange = (event) => {
    toggleOne(event.target.checked, event.target.value);
  };

  return (
    <main>
      <Header handleSubmit={handleSubmit} handleClear={handleClear} title="Product List" firstBtn={firstBtn} secondBtn={secondBtn} />
      <section className="items">
        {message}
        {
          itemData && itemData.length
            ? itemData.map((item) => (
              <Product
                key={item.SKU}
                item={item}
                onCheckBoxChange={onCheckBoxChange}
              />
            )) : (<h1>Loading...</h1>)
        }
      </section>
    </main>
  );
};

export default ProductList;
