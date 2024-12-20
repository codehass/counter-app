import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter';
import { act } from 'react';

// Mock Button component since it's already tested separately
jest.mock('../components/Button', () => {
  return ({ handleClick, bgColor, children }: any) => (
    <button onClick={handleClick} style={{ backgroundColor: bgColor }}>
      {children}
    </button>
  );
});

describe('Counter Component', () => {
  it('should render counter with initial value 0 and black color', () => {
    render(<Counter />);

    // Check if the counter is 0 initially
    const counter = screen.getByText('0');
    expect(counter).toBeInTheDocument();
    
    // Check if the color is black initially
    expect(counter).toHaveStyle('color: black');
  });

  it('should increment counter when + button is clicked', async () => {
    render(<Counter />);

    const incrementButton = screen.getByText('+');
    const counter = screen.getByText('0');
    
    await act(async () => {
      fireEvent.click(incrementButton);
    });

    // Ensure the counter is incremented
    expect(counter).toHaveTextContent('1');
    
    // Ensure the color is blue (since counter > 0)
    expect(counter).toHaveStyle('color: #017CD3');
  });

  it('should decrement counter when - button is clicked', async () => {
    render(<Counter />);

    const decrementButton = screen.getByText('-');
    const counter = screen.getByText('0');
    
    await act(async () => {
      fireEvent.click(decrementButton);
    });

    // Ensure the counter is decremented
    expect(counter).toHaveTextContent('-1');
    
    // Ensure the color is red (since counter < 0)
    expect(counter).toHaveStyle('color: #E70111');
  });

  it('should stay black when counter is 0', () => {
    render(<Counter />);

    const counter = screen.getByText('0');
    
    // Check if the color is black when counter is 0
    expect(counter).toHaveStyle('color: black');
  });
});
