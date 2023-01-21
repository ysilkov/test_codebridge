import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import style from "./ArticleDetails.module.css";
import arrowLeft from "../../images/arrowLeft.png";

const ArticleDetails = () => {
  const article = useSelector((state: RootState) => state.articles.article);
  console.log(article);
  return (
    <div>
      {article.length === 0 ? (
        <div>Loading...</div>
      ) : (
        article.map((el) => (
          <div key={el.id} className={style.article_main}>
            <section className={style.article_picture}>
              <img src={el.imageUrl} alt="Picture Article" />
              <Link to={"/"}>
                <img src={arrowLeft} alt="Arrow Left" /> Back to homepage
              </Link>
            </section>
            <section className={style.article_text}>
              <h1>{el.title}</h1>
              <p>{el.summary}</p>
            </section>
          </div>
        ))
      )}
    </div>
  );
};

export default ArticleDetails;
