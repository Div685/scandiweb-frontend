import React from 'react';
import PropTypes from 'prop-types';

const DvdForm = ({ onChangeSize }) => (
  <>
    <p className="m-0">Please Provide Size</p>
    <label htmlFor="size">
      <span>Size (MB):</span>
      <input type="number" name="DVD" id="size" onChange={onChangeSize} />
    </label>
    <p>*product description</p>
  </>
);

DvdForm.propTypes = {
  onChangeSize: PropTypes.func.isRequired,
};
export default DvdForm;
