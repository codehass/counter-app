import React from 'react'
import Button from './Button'

function Counter() {
  const [counter, setCounter] = React.useState(0)
  
let color;
  if (counter < 0) {
    color = "#E70111"; 
  } else if (counter > 0) {
    color = "#017CD3"; 
  } else {
    color = 'black';
  }

  return (
    <div className='flex flex-col items-center space-y-6'>
      <h2 style={{color: color}} className='text-5xl'>{counter}</h2>
      <div className='flex space-x-4'>
        <Button handleClick={() => setCounter(counter - 1)} bgColor="#E70111">-</Button>
        <Button handleClick={() => setCounter(counter + 1)} bgColor="#017CD3">+</Button>
      </div>
    </div>
  )
}

export default Counter;