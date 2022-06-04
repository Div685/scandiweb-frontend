import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getData } from '../api/fetch';
import Header from '../components/Header';

const ProductList = () => {

  const [itemData, setItemData] = useState([]);
  const [productState, setProductState] = useState([]);

  let navigate = useNavigate();

  const firstBtn = "ADD";
  const secondBtn = "MASS DELETE"

  const handleSubmit = () => {
    let path = '/add-product';
    navigate(path);
  }

  useEffect(() => {
    const requestData = getData();
    requestData.then((data) => {
      setItemData(data.data);
      return data;
    })
  }, []);

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
      <Header handleSubmit={handleSubmit} handleClear={handleClear} title="Product List" firstBtn={firstBtn} secondBtn={secondBtn} />
      <section className="items">
        {
          itemData && itemData.length ?
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
              <p className="name">{item.Name}</p>
              <p className="price"> {item.Price} $</p>
              <p className="measure"> {item.Measure} </p>
            </div>
          )) : (<h1>No Data</h1>)
        }
      </section>
    </main>
  )
}

export default ProductList;
