import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { Link } from "react-router-dom";
import { month } from "../../helper";
import { addArticle, getArticle } from "../../store/articleReducer";
import { AppDispatch, RootState } from "../../store/store";
import calendar from "../../images/calendar.png";
import arrowRight from "../../images/arrowRight.png";
import style from "./HomePage.module.css";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const articles = useSelector((state: RootState) => state.articles.articles);
  useEffect(() => {
    dispatch(getArticle());
  }, []);
  const getArticleId = (id: number) => {
    dispatch(addArticle(id));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const filterArticles = articles.filter((el) => {
    if (el.title.toLowerCase().includes(inputValue.toLowerCase())) {
      return el.title;
    }
    if (
      !el.title.toLowerCase().includes(inputValue.toLowerCase()) &&
      el.summary.toLowerCase().includes(inputValue.toLowerCase())
    ) {
      return el.summary;
    }
  });
  const replacement = "<b>" + inputValue + "</b>";
  const regexp = RegExp(`${inputValue}`, "gi");
  return (
    <div className={style.block_articles}>
      <form className={style.block_articles_form}>
        <p className={style.form_name}>Filter by keywords</p>
        <input type="text" value={inputValue} onChange={handleChange} />
      </form>
      <p>Results: {filterArticles.length}</p>
      <hr />
      <div className={style.container_articles}>
        {articles.length === 0 ? (
          <div className={style.loading}>Loading...</div>
        ) : (
          filterArticles.map((article) => (
            <div key={article.id} className={style.articles}>
              <img
                src={article.imageUrl}
                alt="Picture Article"
                className={style.articles_img}
              />
              <div className={style.articles_data}>
                <img src={calendar} alt="Calendar" />
                <p>
                  {month[new Date(article.publishedAt).getMonth()] +
                    " " +
                    (new Date(article.publishedAt).getDate() === 1 ||
                    new Date(article.publishedAt).getDate() === 21 ||
                    new Date(article.publishedAt).getDate() === 31
                      ? new Date(article.publishedAt).getDate() + "st,"
                      : new Date(article.publishedAt).getDate() === 2 ||
                        new Date(article.publishedAt).getDate() === 22
                      ? new Date(article.publishedAt).getDate() + "nd,"
                      : new Date(article.publishedAt).getDate() === 3 ||
                        new Date(article.publishedAt).getDate() === 23
                      ? new Date(article.publishedAt).getDate() + "rd,"
                      : new Date(article.publishedAt).getDate() + "th,") +
                    " " +
                    new Date(article.publishedAt).getFullYear()}
                </p>
              </div>
              <div className={style.articles_text}>
                <span>
                  {inputValue.length === 0 ? (
                    <h1>{article.title}</h1>
                  ) : (
                    <h1
                      dangerouslySetInnerHTML={{
                        __html: article.title.replace(regexp, replacement),
                      }}
                    ></h1>
                  )}
                </span>
                <span>
                  {inputValue.length === 0 ? (
                    <p>{article.summary}</p>
                  ) : (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: article.summary.replace(regexp, replacement),
                      }}
                    ></p>
                  )}
                </span>
                <span className={style.arrowRight}>
                  <Link
                    to={`/article/${article.id}`}
                    onClick={() => getArticleId(article.id)}
                  >
                    Read more
                    <img src={arrowRight} alt="Arrow Right" />
                  </Link>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
