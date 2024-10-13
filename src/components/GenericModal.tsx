import React from 'react'

type GenericModalProps = {
  children: JSX.Element | JSX.Element[]
  title?: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const GenericModal = ({ children, title, isOpen, setIsOpen }: GenericModalProps) => {
  if (!isOpen) {
    return <></>
  }

  return (
    <div className="genericModalContainer">
      <div className="genericModalShadow" onClick={() => setIsOpen(false)} />

      <div className="genericModalContent">
        <div className="genericModalCloseBtnContent" onClick={() => setIsOpen(false)}>
          <svg
            className="genericModalCloseBtnSVG"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              className="genericModalCloseBtnPath"
              d="M11.5 0C5.15477 0 0 5.15477 0 11.5C0 17.8452 5.15477 23 11.5 23C17.8452 23 23 17.8452 23 11.5C23 5.15477 17.8452 0 11.5 0ZM11.5 1C17.3048 1 22 5.69523 22 11.5C22 17.3048 17.3048 22 11.5 22C5.69523 22 1 17.3048 1 11.5C1 5.69523 5.69523 1 11.5 1ZM15.4951 6.99316C15.3632 6.99628 15.2379 7.05139 15.1465 7.14648L11.5 10.793L7.85352 7.14648C7.80692 7.09859 7.7512 7.06051 7.68964 7.03452C7.62808 7.00852 7.56194 6.99512 7.49512 6.99512C7.39565 6.99514 7.29845 7.02483 7.21595 7.08039C7.13344 7.13595 7.06938 7.21485 7.03195 7.307C6.99452 7.39916 6.98543 7.50038 7.00583 7.59773C7.02623 7.69509 7.0752 7.78414 7.14648 7.85352L10.793 11.5L7.14648 15.1465C7.0985 15.1926 7.06019 15.2477 7.03379 15.3088C7.0074 15.3699 6.99346 15.4356 6.99278 15.5021C6.9921 15.5686 7.00471 15.6346 7.02985 15.6962C7.05499 15.7578 7.09218 15.8137 7.13921 15.8608C7.18625 15.9078 7.24221 15.945 7.3038 15.9701C7.36538 15.9953 7.43137 16.0079 7.49789 16.0072C7.56441 16.0065 7.63013 15.9926 7.69119 15.9662C7.75226 15.9398 7.80744 15.9015 7.85352 15.8535L11.5 12.207L15.1465 15.8535C15.1926 15.9015 15.2477 15.9398 15.3088 15.9662C15.3699 15.9926 15.4356 16.0065 15.5021 16.0072C15.5686 16.0079 15.6346 15.9953 15.6962 15.9701C15.7578 15.945 15.8137 15.9078 15.8608 15.8608C15.9078 15.8137 15.945 15.7578 15.9701 15.6962C15.9953 15.6346 16.0079 15.5686 16.0072 15.5021C16.0065 15.4356 15.9926 15.3699 15.9662 15.3088C15.9398 15.2477 15.9015 15.1926 15.8535 15.1465L12.207 11.5L15.8535 7.85352C15.9261 7.78369 15.976 7.69356 15.9965 7.59493C16.017 7.4963 16.0073 7.39378 15.9685 7.30079C15.9298 7.20779 15.8639 7.12867 15.7794 7.07378C15.6949 7.01889 15.5958 6.99079 15.4951 6.99316Z"
              fill="#1A1A1A"
            />
          </svg>
        </div>

        <h4 className="genericModalTitle">{title}</h4>

        <div className="genericModalContentContainer">{children}</div>
      </div>
    </div>
  )
}

export default GenericModal
