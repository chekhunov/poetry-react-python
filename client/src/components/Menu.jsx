import React from 'react';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Menu = ({multiSelect = false, items, activeId, setActiveId, activePopup}) => {
  const [selection, setSelection] = React.useState([]);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter((current) => current.id !== item.id);
      setSelection([...selectionAfterRemoval]);
    }
  }

  function clickItem(val){
      setActiveId(val);
      val === 0 ? addedOverflow() : removeOverflow()
  }

function addedOverflow(){
  document.body.classList.add('overflow');
}

function removeOverflow(){
  document.body.classList.remove('overflow');

}

  return (
    <ul className={classNames(style.menu, {'menu-active': activePopup})}>
      {items && items.map((item, index) => (
        <Link to={`/${item.link}`} key={item.id + index}>
          <li
            className={classNames(style.item, item.id === activeId ? style.active : '')}
            >
            <div
              type="link"
              className="dd-list-link"
              onClick={(e) => {
                handleOnClick(item);
                clickItem(index);
              }}>
              <span className={classNames(style.left)}>{item.value}</span>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
