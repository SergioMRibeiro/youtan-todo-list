import React from 'react'

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const PrimaryButton = ({ children, ...rest }: PrimaryButtonProps) => {
  return (
    <button {...rest} className="containerPrimaryButton">
      {children}
    </button>
  )
}

export default PrimaryButton
