import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ item, onCheckBoxChange }) => {
  const {
    pid, SKU, Name, Price, Measure,
  } = item;

  return (
    <div className="items-data" key={SKU}>
      <form method="post">
        <input
          className="delete-checkbox"
          type="checkbox"
          value={pid}
          name="checkbox[]"
          id="checkbox"
          // checked={onChecked}
          onChange={
            onCheckBoxChange
          }
        />
        <p className="sku">
          {' '}
          {SKU}
          {' '}
        </p>
        <p className="name">{Name}</p>
        <p className="price">
          {' '}
          {Price}
          {' '}
          $
        </p>
        <p className="measure">
          {' '}
          {Measure}
          {' '}
        </p>
      </form>
    </div>
  );
};

Product.propTypes = {
  onCheckBoxChange: PropTypes.func.isRequired,
  item: PropTypes.shape({
    pid: PropTypes.number,
    SKU: PropTypes.string,
    Name: PropTypes.string,
    Price: PropTypes.string,
    Measure: PropTypes.string,
  }).isRequired,
};
export default Product;
