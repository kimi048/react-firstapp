import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) => {
  const news =props.news.map((item,index) => (
    <NewsItem item={item} key={index}/>
  ))

  // console.log(props);
  return (
    <>
      <div>news list</div>
      {news}
      {props.children}
    </>
  )
}
export default NewsList;