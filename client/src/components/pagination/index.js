import React from 'react';
import classNames from 'classnames';

import style from './pagination.module.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  // const [setPrev] = useState(false);
  // const [setNext] = useState(false);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // const prev = () => (
  //   <a className={style.prev} onClick={() => paginate(currentPage - 1)}>
  //     Назад
  //   </a>
  // );
  // const next = () => (
  //   <a className={style.next} onClick={() => paginate(currentPage + 1)}>
  //     Показать еще
  //   </a>
  // );

  // React.useEffect(() => {
  //   if (currentPage - 1 > 0) {
  //     setPrev(true);
  //   } else {
  //     setPrev(false);
  //   }

  //   if (currentPage !== pageNumbers.length) {
  //     setNext(true);
  //   } else {
  //     setNext(false);
  //   }
  // }, [currentPage, pageNumbers.length]);

  const liRender = (number) => (
    <li key={number} className={classNames(style.item, 'page-item')}>
      <a onClick={() => paginate(number)} className="page-link">
        {number}
      </a>
    </li>
  );

  return (
    <nav className={style.wrapper}>
      <ul className={classNames(style.list, 'pagination')}>
        {pageNumbers.map((number, index) => {
          if (currentPage === number) {
            return (
              <li key={number} className={classNames(style.item, 'page-item')}>
                <a
                  onClick={(e) => {
                    paginate(number);
                  }}
                  className="page-link  page-item-active">
                  {number}
                </a>
              </li>
            );
          }

          return liRender(number);
        })}
      </ul>

      {/* <div className={style.innerButtons}>
        {showPrev && prev()}
        {showNext && next()}
      </div> */}
    </nav>
  );
};

export default Pagination;
