import React from 'react';
import { Route } from 'react-router-dom';
import { Poetry } from './index';
import { Top, About } from '../components/';
import { Gallery } from '.';


import style from './Home.module.scss';

function Home({ appState, poetryList, setPoetryList }) {

  return (
    <div className={style.wrapper}>
      <Route path="/reactPortfolioPoetry" exact>
        <Top />
      </Route>

      <Route path="/about" component={About} />

      <Route
        path="/poetry"
        render={() => <Poetry appState={appState} poetryList={poetryList} setPoetryList={setPoetryList} />}
      />

      <Route path="/gallery" component={Gallery} />
      {/* <Best /> */}
    </div>
  );
}

export default Home;
