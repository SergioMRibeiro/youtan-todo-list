/* eslint-disable no-console */
import React, { useState } from 'react'
import LogoDesktop from '../assets/images/logo-youtan 2.png'
import PrimaryButton from './PrimaryButton'

const Header = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,

    height: window.innerHeight,
  })

  console.log(windowDimensions, setWindowDimensions)

  return (
    <div className="headerContainer">
      <img src={LogoDesktop} alt="logo youtan" className="logoDesk" />

      <div className="searchBarCotainer">
        <input
          type="text"
          placeholder="Pesquisar tarefa"
          className="searchImput"
        />
        <button className="searchButton">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.83401 11.5C8.21477 11.4999 9.40479 11.011 10.3748 10.0417C11.3452 9.07205 11.8341 7.88157 11.8334 6.49973C11.8326 5.11831 11.3439 3.92839 10.3749 2.95945C9.406 1.99051 8.21582 1.50147 6.83391 1.5C5.45113 1.49853 4.26061 1.98796 3.29215 2.96012C2.32476 3.9312 1.83558 5.12046 1.83338 6.4992C1.83116 7.87921 2.32091 9.06964 3.29282 10.0416C4.26464 11.0134 5.45468 11.5028 6.83401 11.5ZM6.83401 11.5C6.8338 11.5 6.83358 11.5 6.83337 11.5V11L6.83401 11.5ZM16.9334 17.2929L10.9869 11.3464L10.6705 11.03L10.321 11.3096C9.86734 11.6725 9.34162 11.9632 8.73944 12.1794C8.14692 12.3921 7.51271 12.5 6.83337 12.5C5.14626 12.5 3.73708 11.9212 2.57502 10.7585C1.41282 9.59572 0.833994 8.18636 0.833375 6.49982C0.832755 4.81357 1.41145 3.40441 2.57483 2.24165C3.73837 1.07873 5.1477 0.5 6.83337 0.5C8.51906 0.5 9.92877 1.07873 11.093 2.24174C12.2569 3.40444 12.8352 4.81341 12.8334 6.49945V6.5C12.8334 7.17934 12.7255 7.81354 12.5128 8.40607C12.2966 9.00825 12.0059 9.53397 11.6429 9.98765L11.3634 10.3371L11.6798 10.6536L17.6263 16.6L16.9334 17.2929Z"
              fill="#48A0B6"
              stroke="black"
            />
          </svg>
        </button>
      </div>

      <PrimaryButton onClick={() => console.log('Fui clicado')}>
        Criar Nova Tarefa
      </PrimaryButton>

      <div className="menusContent">
        <a href="/dashboard">
          <p>Dashboard</p>
        </a>
        <a href="/">
          <p>Sprint</p>
        </a>
        <a href="/todas-as-tarefas">
          <p>Todas as tarefas</p>
        </a>
      </div>
    </div>
  )
}

export default Header
