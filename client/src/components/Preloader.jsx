import classNames from 'classnames';
import React from 'react';
// import style from './Preloader.module.scss';

const Preloader = ({ isLoading }) => {
  console.log(isLoading, 'preloader');
  return (
    <div className={classNames('preloader__inner', isLoading ? 'active' : '')}>
      <div className={classNames('circle', 'circle-1')}></div>
      <div className={classNames('circle', 'circle-2')}></div>
      <div className={classNames('circle', 'circle-3')}></div>
      <div className={classNames('circle', 'circle-4')}></div>
      <div className={classNames('circle', 'circle-5')}></div>
    </div>
  );
};

export default Preloader;
