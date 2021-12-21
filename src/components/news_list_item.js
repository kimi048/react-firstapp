import React from 'react';
import { css } from 'glamor';
let news_item = css({
  padding: '20px',
  boxSizing: 'border-box',
  borderBottom:'1px solid grey'
})

const NewsItem = (props) => {
  console.log(props);
  return (
    <div {...news_item}>
      <h3>{props.item.title}</h3>
      <div>{props.item.feed}</div>
    </div>
  )
}
export default NewsItem;