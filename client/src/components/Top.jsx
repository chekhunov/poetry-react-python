import React from 'react';
import style from './Top.module.scss';
import flowers from '../assets/flowers.png';
import classNames from 'classnames';

function Top() {
  return (
    <section className={style.top}>
      <div className={classNames(style.wrapper, 'top__wrapper')}>
        <div className="container">
          <div className={classNames(style.inner, 'top__inner')}>
            <h1 className={style.title}>Valentina CHEKHUNOVA.</h1>
            <h1 className={style.subtitle}>поэтесса стихотворений в торжественном стиле!</h1>
          </div>
        </div>
      </div>

      <div className={style.innerImages}>
        <img className={style.img} src={flowers} alt="user" />
      </div>
    </section>
  );
}

export default Top;
