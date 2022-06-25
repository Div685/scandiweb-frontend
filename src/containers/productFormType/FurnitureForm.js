import React from 'react';
import PropTypes from 'prop-types';

const FurnitureForm = ({ onHandleChangeHeight, onHandleWeight, onHandleLength }) => (
  <div>
    <p>Please Provide a dimensions in HxWxL format</p>
    <label htmlFor="height">
      <span>Height (CM):</span>
      <input
        type="number"
        name="height"
        id="height"
        onChange={onHandleChangeHeight}
      />
    </label>
    <label htmlFor="width">
      <span>Width (CM):</span>
      <input
        type="number"
        name="width"
        id="width"
        onChange={onHandleWeight}
      />
    </label>
    <label htmlFor="length">
      <span>Length (CM):</span>
      <input
        type="number"
        name="length"
        id="length"
        onChange={onHandleLength}
      />

    </label>

    <p>*product description</p>
  </div>
);

FurnitureForm.propTypes = {
  onHandleChangeHeight: PropTypes.func.isRequired,
  onHandleLength: PropTypes.func.isRequired,
  onHandleWeight: PropTypes.func.isRequired,
};
export default FurnitureForm;
