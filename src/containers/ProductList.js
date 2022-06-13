import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteData, getData } from '../api/fetch';
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

  const handleClear = async () => {
    if(productState.length > 0) {

      const pS = productState.toString();
      const data = new FormData();
      data.append("checkbox[]", [pS]);
      const url = "http://localhost:8000/api/delete.php";
      // const req = await fetch(url, { mode: 'cors', method: 'POST', body: data})
      //   .then(res => res)
      //   .catch((e) => ('Error: ', e));
      const req = await deleteData(data);
      console.log(req);

    } else {
      console.log('Please Select Item to delete')
    }
  }


  const toggleOne = (checked, id) => {
    if(checked) {
      setProductState(productState.concat([id]));
    } else {
      setProductState(productState.filter((el) => el !== id))
    }
  }

  const onCheckBoxChange = (event) => {
    // const productStates = [...productState];
    // const isChecked = productStates.includes(event.target.checked);
    // if (!isChecked) {
    //   productStates.push(event.target.value);
    // } else {
    //   productStates.splice(productState.indexOf(event.target.value), 1);
    // }
    // setProductState(productStates);

    toggleOne(event.target.checked, event.target.value);
    
  }

  return (
    <main>
      <Header handleSubmit={handleSubmit} handleClear={handleClear} title="Product List" firstBtn={firstBtn} secondBtn={secondBtn} />
      <section className="items">
        {
          itemData && itemData.length ?
          itemData.map((item) => (
            <div className="items-data" key={item.SKU}>
              <form method="post">

                <input className="delete-checkbox" 
                  type="checkbox"
                  value={item.pid}
                  name="checkbox[]" 
                  id="checkbox"
                  checked={(productState && productState.indexOf(item.pid)) >= 0}
                  onChange={ 
                    onCheckBoxChange
                  }
                  />
                <p className="sku"> {item.SKU} </p>
                <p className="name">{item.Name}</p>
                <p className="price"> {item.Price} $</p>
                <p className="measure"> {item.Measure} </p>
              </form>
            </div>
          )) : (<h1>Loading...</h1>)
        }
      </section>
    </main>
  )
}

export default ProductList;
