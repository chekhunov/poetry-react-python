import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';
import { Menu } from './';
import rosa from '../assets/rosa.svg';

const items = [
  {
    id: 0,
    value: 'Главная',
    link: 'reactPortfolioPoetry',
  },
  {
    id: 1,
    value: 'Обо мне',
    link: 'about',
  },
  {
    id: 2,
    value: 'Поэзия',
    link: 'poetry',
  },
  {
    id: 3,
    value: 'Галлерея',
    link: 'gallery',
  },
];

function Header() {
  const [activeId, setActiveId] = React.useState(0);
  const [activePopup, setActivePopup] = React.useState(false);

  function activeLogo() {
    setActiveId(0);
    document.body.classList.add('overflow');
  }

  function isActivePopup() {
    setActivePopup(!activePopup);
  }

  function addedOverflowForBody() {
    !activePopup
      ? document.body.classList.add('overflow')
      : document.body.classList.remove('overflow');
    !activePopup
      ? document.documentElement.classList.add('overflow-x')
      : document.documentElement.classList.remove('overflow-x');
  }
  return (
    <header className={classNames(style.header, 'p-20')}>
      <div className="header__wrap d-flex align-center justify-between">

       {!activePopup && <Link to={'/reactPortfolioPoetry'} onClick={activeLogo}>
          <div className="block d-flex align-center justify-between">
            <img className={style.img} height="30" width="30" src={rosa} alt="rosa" />
            <span className={style.logoLeft}>Valentina</span>{' '}
            <span className={style.logoRight}>CHEKHUNOVA.</span>
          </div>
        </Link>}

        <div className={classNames("header__menu-wrap", {"active": activePopup})}>
            <Menu items={items} activeId={activeId} activePopup={activePopup} setActiveId={setActiveId} />
        </div>

        <button
          className={classNames('header__popup', {active: activePopup})}
          onClick={(e) => {
            isActivePopup();
            addedOverflowForBody();
          }}>
          <span className="header__popup-line"></span><span className="header__popup-title">Меню</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
