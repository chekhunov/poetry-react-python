import React from 'react';
import classNames from 'classnames';
import state from '../state/state'
import style from './Gallery.module.scss';
import bg from '../assets/pow2.jpeg'
import Pagination from '../components/pagination';

export default function Gallery() {

  const [items] = React.useState(state.img);

  //pagin bottom
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(10);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={style.gallery}>
    <div className={style.meta}>
        <div className={style.title}>Галлерея</div>
        <div className={style.imgInner}>
            <img className={style.imgBg} src={bg} alt="bg" />
        </div>
      </div>
{/*       <div className={style.meta}> */}
{/*        */}
{/*          */}{/* <img className={style.img} src={flavor1} alt="bg" /> */}
{/*         <div className={classNames(style.headline, 'title')}>Галлерея</div> */}
{/*         <div className={classNames(style.desc, 'desc')}>Семейный альбом</div> */}
{/*       </div> */}

        <div className={classNames(style.desc, 'desc')}>Семейный альбом</div>

      <div className={style.inner}>
        {currentPosts &&
          currentPosts.map((item, index) => (
            <div key={item.id} className={style.item}>
              <img
                className={style.img}
                src={`${process.env.PUBLIC_URL}${item.img}`}
//                 src={item.image}
                alt="gallery"
              />
              {/* <img src={window.location.origin + item.img} alt="gallery" /> */}
            </div>
          ))}

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={items.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>

    </div>
  );
}
