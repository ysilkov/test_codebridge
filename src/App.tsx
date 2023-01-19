import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ArticleDetails from './components/ArticleDetails';
import HomePage from './components/HomePage';
import { RootState } from './store/store';


  function App() {
    const id = useSelector((state: RootState)=>state.articles.id)
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={`/article/${id}`} element={<ArticleDetails />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
export default App;
