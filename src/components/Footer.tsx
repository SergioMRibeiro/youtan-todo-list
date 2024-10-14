import React from 'react'

const Footer = () => {
  return (
    <div className="FooterContentMainContainer">
      <div className="FooterContentSecondaryContainer">
        <div className="FooterContentFirstRow">
          <div className="FooterContentContact">
            <p>Contato: (21) 98800-7952</p>
            <p>
              E-mail:{' '}
              <a href="mailto:sergio_tere@hotmail.com">
                sergio_tere@hotmail.com
              </a>
            </p>
          </div>

          <div className="FooterContentLinkedinImg">
            <a href="https://www.linkedin.com/in/s%C3%A9rgio-m-ribeiro-19y06m/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="40"
                viewBox="0 0 42 40"
                fill="none">
                <path
                  d="M33.262 5C34.189 5 35.078 5.35119 35.7335 5.97631C36.389 6.60143 36.7573 7.44928 36.7573 8.33333V31.6667C36.7573 32.5507 36.389 33.3986 35.7335 34.0237C35.078 34.6488 34.189 35 33.262 35H8.79529C7.8683 35 6.97927 34.6488 6.32378 34.0237C5.6683 33.3986 5.30005 32.5507 5.30005 31.6667V8.33333C5.30005 7.44928 5.6683 6.60143 6.32378 5.97631C6.97927 5.35119 7.8683 5 8.79529 5H33.262ZM32.3882 30.8333V22C32.3882 20.559 31.788 19.177 30.7195 18.1581C29.6511 17.1391 28.202 16.5667 26.691 16.5667C25.2055 16.5667 23.4753 17.4333 22.6365 18.7333V16.8833H17.7606V30.8333H22.6365V22.6167C22.6365 21.3333 23.72 20.2833 25.0657 20.2833C25.7146 20.2833 26.3369 20.5292 26.7957 20.9668C27.2546 21.4043 27.5123 21.9978 27.5123 22.6167V30.8333H32.3882ZM12.0808 14.2667C12.8595 14.2667 13.6063 13.9717 14.1569 13.4466C14.7075 12.9215 15.0168 12.2093 15.0168 11.4667C15.0168 9.91667 13.7061 8.65 12.0808 8.65C11.2975 8.65 10.5463 8.94675 9.9924 9.47498C9.43851 10.0032 9.12734 10.7196 9.12734 11.4667C9.12734 13.0167 10.4555 14.2667 12.0808 14.2667ZM14.51 30.8333V16.8833H9.66911V30.8333H14.51Z"
                  fill="#F8F8F8"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="FooterContentSecondRow">
          <p>Desenvolvido por: Sérgio Ribeiro</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
