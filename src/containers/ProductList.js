import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const ProductList = () => {

  const [itemData, setItemData] = useState([]);
  let navigate = useNavigate();

  const firstBtn = "ADD";

  const handleSubmit = () => {
    let path = '/add-product';
    navigate(path);
  }

  const handleClear = () => {
    console.log('delete');
  }

  const fetchData = async (url) => {
    // try {
    //   fetch(url)
    //   .then((res) => res.json())
    //   .then((json) => {
    //       setItemData({json});
    //   })
    // }catch(e) {
    //   console.log('something worong')
    // }
    const request = await fetch(url);
    if (request.status === 200) {
      const data = await request.json();
      setItemData(data.items);
      return data;
    }
    throw Error(404);
  }
 
  useEffect(() => {
    const url = "/items.json";
    fetchData(url);
    // try {
    //   fetch(url)
    //   .then((res) => res.json())
    //   .then((json) => {
    //       setItemData(json.items);
    //   })
    // }catch(e) {
    //   console.log('something worong')
    // }
  }, []);

  return (
    <main>
      <Header handleSubmit={handleSubmit} handleClear={handleClear} title="Product List" firstBtn={firstBtn} secondBtn="Mass Delete" />
      <section className="items">
        {
          itemData.map((item) => (
            <div className="items-data" key={item.SKU}>
              <input className="delete-checkbox" type="checkbox" name="checkbox" id="checkbox"/>
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
