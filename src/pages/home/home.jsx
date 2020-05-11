import React from 'react';
import axios from '../../utils/axios';
import {Pagination} from 'antd';
import {Link} from "react-router-dom";
import './index.scss'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }

  }

  ArticleList() {
    console.log(this)
    axios.post('http://api.xuhaibing.io/v1/article/list').then(response => {
      this.setState({list: response});
    })
  }

  componentDidMount() {
    this.ArticleList()
  }
  render() {

    return (<div className="index-content">

      <div className="container">
        {
          this.state.list.map(row => {
            return (<div className="article-list-item" key={row.id}>

              <h2>
                <Link to={'detail/' + row.href}>{row.title}</Link>
              </h2>
              <div className="desc" dangerouslySetInnerHTML={{
                  __html: row.contents
                }}></div>
              <div className="tags-date">
                <div className="tags">
                  <span>{row.tags}</span>
                </div>
                <div className="date">{row.time}</div>
              </div>
            </div>)
          })
        }
      </div>
      <Pagination defaultCurrent={1} total={50}/>
    </div>);
  }
}

export default Home;
