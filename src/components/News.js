import { FadeIn } from 'react-slide-fade-in';
import "../styles/news.css";
import { news_items } from '../content/news_items.js';

const NewsItem = ({pic, year, text_p}) => {
  return (
    <div className="news-item-box">
      <div className="pic-container news-item-image">
        <img src={pic} alt="Relates to news item description below" width="200" height="200" />
      </div>
      <p className="news-item-date">{year}</p>
      <div className="news-item-text">{text_p}</div>
    </div>
  );
}

const makeNewsItem = (news_item) => {
  return (
    <NewsItem
      key={news_item.key}
      pic={news_item.pic}
      year={news_item.year}
      text_p={news_item.text_p}
    />
  );
}

const News = () => {
  return (
    <div id="news-div">
      <FadeIn
      durationInMilliseconds={500}
      >
        <h1 className="section-head">News</h1>
      </FadeIn>
      <FadeIn
      from="bottom"
      positionOffset={50}
      durationInMilliseconds={500}
      >
      <div id="news-items-div">
        {news_items.map(makeNewsItem)}
      </div>
      </FadeIn>
    </div>
  );
}

export default News;