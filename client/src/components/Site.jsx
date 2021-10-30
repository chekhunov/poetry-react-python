import React from 'react';
import style from './Site.module.scss';

const Site = () => {
  return (
    <section className={style.site}>
      <div className="container">
        <div className="title">О сайте</div>
        <div className={style.text}>
          Добро пожаловать на мой сайт портфолио. На сайте представляю поздравительные оды, очерки
          написанные в течении моей жизни, а так же новые работы. Идеей для создания сайта послужило
          собрание моих работ, которые я решила предоставить Вашему вниманию, а так же почувствовать
          настроение, которое я передаю через мои работы!
        </div>
      </div>
    </section>
  );
};

export default Site;
