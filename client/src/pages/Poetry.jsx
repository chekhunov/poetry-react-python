import React from 'react';
import style from './Poetry.module.scss';
import classNames from 'classnames';
import { Best, MenuList, PoetryCard } from '../components';
import flavor1 from '../assets/pow.jpeg';
import axios from 'axios';

export default function Poetry({ loading, setLoading, appState, props, poetryList, setPoetryList}) {
  const [whomeItem, setWhomeItem] = React.useState([]);
  const [activeWhomeItem, setActiveWhomeItem] = React.useState('Все стихи');
  const [activeId, setActiveId] = React.useState(0);

  React.useEffect(() => {
        async function fetchData() {
            const componentWillMount = await
                //там где then используется ECMAScript
                axios.get('http://127.0.0.1:8000/consecrated')

                setWhomeItem(componentWillMount.data);
        }
        fetchData();
   }, [activeWhomeItem]);

   function getConsecrated(consecrId) {
     const bu = whomeItem.find((item,index) => index+1 === consecrId)
     if(bu) {
        return bu.title
     }
   }

//индекс активного елемента меню
   const getCountConsecr = () => {
    let count = null
    whomeItem.map(
    (consecr, index) => consecr.title === activeWhomeItem ?
    (count = index+1) : '')
    return count
   }

   const getPoetry =() => {
        const newArr = [...poetryList]
        const temp = []
        newArr.map(
        (poetry) => poetry.consecrated === getCountConsecr() ? temp.push(poetry) : ''
        )
        return temp
   }

  return (
    <section className={classNames(style.poetry, 'poetry')}>
      <div className={style.meta}>

        <div className={classNames(style.headline, 'title')}>Поэзия</div>
        <div className={style.imgInner}>
        <img className={style.img} src={flavor1} alt="bg" />
        </div>
      </div>

      <div className={style.topMenu}></div>

      <Best top={appState.top}/>

      <div className="container">
        <div className={style.wrapper}>
           <div className={classNames(style.innerMenu, "d-flex flex-column align-center")}>
                <MenuList
                          items={[{title: 'Все стихи'}]}
                          activeId={activeId}
                          setActiveId={setActiveId}
                          activeWhomeItem={activeWhomeItem}
                          setActiveWhomeItem={setActiveWhomeItem}
                />

                <MenuList
                          items={whomeItem}
                          activeId={activeId}
                          setActiveId={setActiveId}
                          activeWhomeItem={activeWhomeItem}
                          setActiveWhomeItem={setActiveWhomeItem}
                />
           </div>

          <div className={classNames(style.inner, 'poetry__inner')}>
            {activeWhomeItem !== 'Все стихи' ?
            (getPoetry().map((item, index) =>
              <PoetryCard key={item.id + item.text} getConsecrated={getConsecrated} {...item} />))
            :
            ( poetryList && poetryList.map((item, index) =>
              <PoetryCard key={item.id + item.text} getConsecrated={getConsecrated} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
