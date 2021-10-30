import React, { useState, useEffect } from 'react';
import { Header, Preloader } from './components';
import { Home } from './pages';
import axios from 'axios';
import { setPoetry } from './actions/poetry';
import {connect} from "react-redux";

const App = (props) => {
  const {setPoetry} = props
  const {poetry, isReady } = props.poetry
  const [poetryList, setPoetryList] = useState([]);

  useEffect(() => {
  let cleanupFunction = false;
    async function fetchData() {
    try {
        const componentWillMount = await
            axios.get('http://127.0.0.1:8000/verse')

            setPoetry(componentWillMount.data);
            setPoetryList(componentWillMount.data);
    } catch (err) {
        alert('Hе удалось загрузить список новостей');
    }
    }
    fetchData();
    return () => (cleanupFunction = true);
}, [setPoetry]);

const mapStateToProps = ({poetry: {items}}) => ({
  poetry: poetry.items,
  isReady: poetry.isReady
})

  return (
    <div className="wrapper">
      <Header />
      {!isReady ? (
        <Preloader isLoading={isReady} />
      ) : (
        <Home appState={props.appState} poetryList={poetryList} setPoetryList={setPoetryList}/>
      )}
    </div>
  );
};


//прикручиваем состояние в пропсы
const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  //вернет обьект который мы отправляем в наш редьюсер
setPoetry: poetry => dispatch(setPoetry(poetry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
