import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Header from '../../components/Header';

const title = 'Product List';
const handleSubmit = jest.fn();
const handleClear = jest.fn();
const firstBtn = 'ADD';
const secondBtn = 'Delete';
beforeEach(() => {
  //   // setup a DOM element as a render target
  render(
    <Header 
      title={title}
      firstBtn={firstBtn}
      secondBtn={secondBtn}
      handleClear={handleClear}
      handleSubmit={handleSubmit}
    />
    );
});

describe('Header Component', () => {
  it('render Header Page correctly', () => {
    const tree = renderer.create(
      <Header 
      title={title}
      firstBtn={firstBtn}
      secondBtn={secondBtn}
      handleClear={handleClear}
      handleSubmit={handleSubmit}
    />,
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Header ', () => {
  it('render Header Title', () => {
    expect(screen.getByRole('heading').textContent).toBe(' Product List ');
  });
});
