import React from 'react';
import style from './Menu.module.scss';
import classNames from 'classnames';

const MenuList = ({multiSelect = false, items, activeId, setActiveId, setActiveWhomeItem, activeWhomeItem}) => {
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

  return (
    <ul className={classNames(style.menu, "wrapper-menu p-5")}>
      {items && items.map((item, index) => (
          <li key={item.id + item.title}
            className={classNames(style.item, item.title === activeWhomeItem ? style.active : '')}
            >
            <div
              type="link"
              className="dd-list-link"
              onClick={(e) => {
                handleOnClick(item);
                setActiveWhomeItem(item.title)
              }}>
              <span className={classNames(style.left)}>{item.title}</span>
            </div>
          </li>
      ))}
    </ul>
  );
};

export default MenuList;
