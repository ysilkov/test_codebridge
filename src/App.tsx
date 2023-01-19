import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import './App.css';
import { getArticle } from './store/articleReducer';
import { AppDispatch, RootState } from './store/store';

function App() {
const dispatch: AppDispatch = useDispatch()
  const articles = useSelector((state: RootState)=>state.articles.articles)
  console.log(articles)
  const giveMeArticle =() =>{
    dispatch(getArticle())
  }
  return (
    <div className="App">
      <button onClick={()=>giveMeArticle()}>Submit</button>
    </div>
  );
}

export default App;
