import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  handleClick: () => void
  bgColor?: string
}

function Button({children, handleClick, bgColor}: ButtonProps) {
  return (
    <button style={{background: bgColor}} className={`py-3 px-7 rounded-md text-white shadow-sm`} onClick={handleClick}>{children}</button>
  )
}

export default Button;