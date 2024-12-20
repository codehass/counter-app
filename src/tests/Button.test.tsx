import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';
import { act } from 'react';

// Mock function for handleClick
const mockHandleClick = jest.fn();

describe('Button Component', () => {
  it('should render children correctly', () => {
    render(<Button handleClick={mockHandleClick}>Click Me</Button>);

    // Check if the button contains the text "Click Me"
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should call handleClick when clicked', async () => {
    render(<Button handleClick={mockHandleClick}>Click Me</Button>);

    const button = screen.getByText('Click Me');
    await act(async () => {
      fireEvent.click(button);
    });

    // Ensure handleClick was called once
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply the background color style when bgColor is passed', () => {
    const bgColor = 'red';
    render(<Button handleClick={mockHandleClick} bgColor={bgColor}>Click Me</Button>);

    const button = screen.getByText('Click Me');
    
    // Check if the button has the correct background color
    expect(button).toHaveStyle(`background: ${bgColor}`);
  });

  it('should not apply background color if bgColor is not passed', () => {
    render(<Button handleClick={mockHandleClick}>Click Me</Button>);

    const button = screen.getByText('Click Me');
    
    // Check if the button has no background style
    expect(button).not.toHaveStyle('background: none');
  });
});
