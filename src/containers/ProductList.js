import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const ProductList = () => {

  const [itemData, setItemData] = useState([]);
  const [productState, setProductState] = useState([]);

  let navigate = useNavigate();

  const firstBtn = "ADD";

  const handleSubmit = () => {
    let path = '/add-product';
    navigate(path);
  }

  useEffect(() => {
    const url = "/items.json";
    fetchData(url);
  }, []);

  const fetchData = async (url) => {
    const request = await fetch(url);
    if (request.status === 200) {
      const data = await request.json();
      setItemData(data.items);
      return data;
    }
    throw Error(404);
  }

  const handleClear = () => {
    let arrayids = [];
    productState.forEach(d => {
        arrayids.push(d);
    });
  }

  const onCheckBoxChange = (event) => {
    const productStates = [...productState];
    const isChecked = productStates.includes(event.target.checked);
    if (!isChecked) {
      productStates.push(event.target.value);
    } else {
      productStates.splice(productState.indexOf(event.target.value), 1);
    }
    setProductState(productStates);
  }

  return (
    <main>
      <Header handleSubmit={handleSubmit} handleClear={handleClear} title="Product List" firstBtn={firstBtn} secondBtn="Mass Delete" />
      <section className="items">
        {
          itemData.map((item) => (
            <div className="items-data" key={item.SKU}>
              <input className="delete-checkbox" 
                type="checkbox"
                value={item.SKU}
                name="checkbox" 
                id="checkbox"
                onChange={ 
                  onCheckBoxChange
                }
                 />
              <p className="sku"> {item.SKU} </p>
              <p className="name">{item.name}</p>
              <p className="price"> {item.price} </p>
              <p className="measure"> {item.measure} </p>
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default ProductList;
