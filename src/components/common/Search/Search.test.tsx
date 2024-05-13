import { render, fireEvent, screen } from '@testing-library/react';
import SearchComponent from './index'; 
import '@testing-library/jest-dom/extend-expect';

test('search button is visible when search input has value', () => {
  // Mock onChange and onClear functions
  const onChange = jest.fn();
  const onClear = jest.fn();

  render(<SearchComponent value="" onChange={onChange} onClear={onClear} />);

  // Get the search input element
  const searchInput = screen.getByPlaceholderText('Search...');

  // Type a search query into the input
  fireEvent.change(searchInput, { target: { value: 'example' } });

  // Get the search button element (clear icon)
  const clearIcon = screen.getByAltText('clear');

  // Assert that the search button (clear icon) is visible
  expect(clearIcon).toBeTruthy(); // Use directly without type assertion
});

test('search button is hidden when search input is empty', () => {
  // Mock onChange and onClear functions
  const onChange = jest.fn();
  const onClear = jest.fn();

  render(<SearchComponent value="" onChange={onChange} onClear={onClear} />);

  // Get the search input element
  const searchInput = screen.getByPlaceholderText('Search...');

  // Assert that the search button (clear icon) is not initially visible
  expect(screen.queryByAltText('clear')).toBeNull();

  // Clear the search input (by simulating backspace)
  fireEvent.change(searchInput, { target: { value: '' } });

  // Assert that the search button (clear icon) is hidden
  expect(screen.queryByAltText('clear')).toBeNull();
});
