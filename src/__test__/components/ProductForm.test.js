import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import ProductForm from '../../containers/ProductForm';

describe('Proudct Form Component', () => {
  it('render Product Form Page correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <ProductForm />
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
