import React from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onChangeWeight }) => (
  <>
    <p>Please Provide Weight</p>
    <label htmlFor="weight">
      <span>Weight (KG):</span>
      <input type="number" name="book" id="weight" onChange={onChangeWeight} />
    </label>
    <p>*product description</p>
  </>
);

BookForm.propTypes = {
  onChangeWeight: PropTypes.func.isRequired,
};
export default BookForm;
