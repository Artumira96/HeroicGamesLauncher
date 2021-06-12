import '@testing-library/jest-dom'
import React from 'react';

import {
  fireEvent,
  render
} from '@testing-library/react';

import InfoBox from './index';

describe('InfoBox', () => {

  test('renders', () => {
    render(<InfoBox text='Test Info' ><div></div></InfoBox>);
  })

  test('contains text', () => {
    const { getByTestId } = render(<InfoBox text='Test Info' ><div></div></InfoBox>);
    const spanInfoBox = getByTestId('infoboxSpan');
    expect(spanInfoBox).toHaveTextContent('Test Info');
  })

  test('contains children', () => {
    const { getByTestId } = render(<InfoBox text='' ><div data-testid='children'>Test Info</div></InfoBox>);
    const children = getByTestId('children');
    expect(children).toHaveTextContent('Test Info');
  })

  test('children is visible on click', () => {
    const { getByTestId } = render(<InfoBox text='' ><div></div></InfoBox>);
    const spanInfoBox = getByTestId('infoboxSpan');
    const divInfoBox = getByTestId('infoboxDiv');
    expect(divInfoBox).not.toBeVisible();
    fireEvent.click(spanInfoBox);
    expect(divInfoBox).toBeVisible();
  })

})
