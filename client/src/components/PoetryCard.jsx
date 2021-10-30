import React, { useState } from 'react';
import style from './PoetryCard.module.scss';
import classNames from 'classnames';

const PoetryCard = ({id, slug, title, consecrated, text, date_of_creation, getConsecrated}) => {
const [isActiveItem, setIsActiveItem] = useState(false)

const activeItem = () => {
    setIsActiveItem(!isActiveItem)
    console.log(isActiveItem)
}

  return (
  <div className={classNames(style.item, 'poetry-item', {'active': isActiveItem})} onClick={activeItem}>
                    <div className={style.contentBox}>

                      <div className={style.title}>{title}</div>
                      <div className={style.consecr}>{getConsecrated(consecrated)}</div>
                      <div className={classNames(style.text, 'poetry-text')}>{text}</div>
                      <div className={style.date}>{date_of_creation}</div>
                    </div>
  </div>
  )
};

export default PoetryCard;
