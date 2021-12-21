import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';
import Footer from './components/footer';
class App extends Component{
  constructor() {
    super()
    this.state = {
      news: JSON,
      footerText: "I am the main footer",
      filtered:[]
    }
  }

  getKeywords = (event) => {
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keywords) > -1;
    })
    // console.log(filtered);
    this.setState({
      filtered
    })
  }
  

  render() {
    const state = this.state;
    let newsFiltered = state.filtered;
    let newsAll = state.news;
    console.log("state");
    console.log(state);
    return (
      <>
        <Header keywords={this.getKeywords}/>
        <NewsList news={newsFiltered.length===0? newsAll : newsFiltered}>
          <br />
          <h1>I am the news</h1>
        </NewsList>
        <Footer footerText={state.footerText} />
      </>
    )
  }
}
// const App = () => {
//   return (
//     <>
//       <Header />
//     </>
//   )
// }

ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
