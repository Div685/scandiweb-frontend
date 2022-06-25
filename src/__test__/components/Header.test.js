import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Header from '../../components/Header';

beforeEach(() => {
  //   // setup a DOM element as a render target
  const title = 'Product List';
  render(<Header title={title} />);
});

describe('Header Component', () => {
  it('render Header Page correctly', () => {
    const tree = renderer.create(
      <Header />,
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Header ', () => {
  it('render Header Title', () => {
    expect(screen.getByRole('heading').textContent).toBe(' Product List ');
  });
});
