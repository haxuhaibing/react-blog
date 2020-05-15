import React, {useState} from 'react';
import {post} from '../../utils/axios';
import {Pagination, Row, Col} from 'antd';
import {Link} from "react-router-dom";
import './index.scss'
import HotArticle from "../../components/HotArticle/hotArticle"
 
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }

  }

  ArticleList() {
    post('article/list').then(response => {
      this.setState({list: response});
    })
  }

  componentDidMount(prevProps, prevState, snapshot) {
    // console.log(prevProps, prevState, snapshot)
    this.ArticleList()
  }
  render() {

    return (<div className="index-content">
      <div className="container">

        <Row gutter={[16, 16]}>
          <Col span={16}>
            <div className="article-list">
              {
                this.state.list.map(item => {
                  return (<div className="article-list-item" key={item.id}>

                    <h2>
                      <Link to={'detail/' + item.href}>{item.title}</Link>
                    </h2>
                    <div className="desc" dangerouslySetInnerHTML={{
                        __html: item.contents
                      }}></div>
                    <div className="tags-date">
                      <div className="tags">
                        <span>{item.tags}</span>
                      </div>
                      <div className="date">{item.time}</div>
                    </div>
                  </div>)
                })
              }
            </div>
            <Pagination defaultCurrent={1} total={50}/>
          </Col>
          <Col span={8}>
            <HotArticle></HotArticle>
          </Col>
        </Row>
      </div>
    </div>);
  }
}

export default Home;
