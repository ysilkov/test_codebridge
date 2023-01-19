import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from 'react-router-dom';

const ArticleDetails =()=>{
   const article = useSelector((state: RootState)=>state.articles.article)
  console.log(article)
   return(
      <div>
         { article.length === 0 ? <div>Loading...</div> :
          article.map(el=>(
            <div key={el.id}>
            <section >
      <img src={el.imageUrl} alt="Picture Article" />
      <Link to={"/"}>Back to homepage</Link>
   </section>
   <section>
      <h1>{el.title}</h1>
      <p>{el.summary}</p>
   </section>
   </div>
))}
      </div>
         )
}

export default ArticleDetails; 