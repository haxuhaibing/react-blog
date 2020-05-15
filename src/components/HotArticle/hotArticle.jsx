import React from 'react';
import {post} from '../../utils/axios';
import './index.scss'
import {Link} from "react-router-dom";
class HotArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotList: []
    }

  }

  getHotArticle() {
    post("/article/hotList").then(response => {
      this.setState({hotList: response});
    })
  }
  componentDidMount() {
    this.getHotArticle();
  }
  render() {
    return (<div className="hot-article">
      <div className="v-headline">
        <h2>近期热门 - 点击最多</h2>
      </div>
      <div className="hot-article-list ">
        <ul>
          {
            this.state.hotList.map(item => {
              return (<li key={item.id}>
                <Link to={'detail/' + item.href}>{item.title}</Link>
              </li>)
            })
          }
        </ul>
      </div>
    </div>);
  }
}

export default HotArticle;
