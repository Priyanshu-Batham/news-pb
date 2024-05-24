import React from "react";
import CategoryStrip from "../components/CategoryStrip";
import Card from "../components/Card";
import Loader from "../components/Loader";
import BigLoader from "../components/BigLoader";
import defaultImg from '../assets/defaultImg.png'
import Logo from '../assets/logo.png'
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const News = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageId, setNextPageId] = useState(null);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchNews(category).then((output) => {
      setNews(output);
      setIsLoading(false);
    });
  }, [category]);

  async function fetchNews() {
    const apiKey = `pub_44558e2b48b708b113a3d00c7feec667b4e24`;

    let url = `https://newsdata.io/api/1/latest?size=8&country=in&language=en&apikey=${apiKey}${
      category !== "" ? `&category=${category}` : ""}${nextPageId?`&page=${nextPageId}`:''}`;

    // let url = "https://randomuser.me/api/";
    let req = new Request(url);
    let res = await fetch(req);
    let data = await res.json();
    
    data.nextPage?setNextPageId(data.nextPage):setHasMoreData(false);
    
    return data.results;
  }

  async function fetchMoreNews() {
    let output = await fetchNews(category);
    setNews(news.concat(output));
  }

  return (
    <div className="bg-secondary">
      <CategoryStrip
        fetchNews={fetchNews}
        category={category}
        setCategory={setCategory}
      />
      <div className="container bg-dark text-light">
        <div className="d-flex justify-content-center">
          <img src={Logo} alt='news-pb'/>
        </div>
        {isLoading && <BigLoader />}
        {!isLoading && (
          <InfiniteScroll
            dataLength={news.length}
            next={fetchMoreNews}
            loader={<Loader />}
            hasMore={hasMoreData}
            className="container d-flex flex-wrap justify-content-around align-items-center"
          >
            {news.map((data, index) => {
              return (
                <Card
                  key={index}
                  image_url={data.image_url?data.image_url:defaultImg}
                  title={data.title}
                  link={data.link}
                />
              );
            })}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default News;
