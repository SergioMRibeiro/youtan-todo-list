import React from 'react'

interface PrimaryButtonProps {
  children: JSX.Element | string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const PrimaryButton = ({ children, onClick }: PrimaryButtonProps) => {
  return (
    <button className="containerPrimaryButton" onClick={onClick}>
      {children}
    </button>
  )
}

export default PrimaryButton
