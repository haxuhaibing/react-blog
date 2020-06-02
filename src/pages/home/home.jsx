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
      list: [],
      page: 1,
      total: 0
    }

  }
  //获取文章列表
  ArticleList() {
    let data = {
      page: 1,
      pageSize: 5
    };
    post('article/list', data).then(response => {
      this.setState({list: response.list, total: response.total});
    })
  }

  componentDidMount(prevProps, prevState, snapshot) {
    this.ArticleList()
  }
  
  render() {

    return (<div className="index-content">
      <div className="container">

        <Row gutter={[0, 0]}>
          <Col xs={24} md={16}>
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
            <div className="mt16">
              <Pagination defaultCurrent={this.state.page} total={this.state.total}/>
            </div>

          </Col>
          <Col xs={24} md={8}>
            <HotArticle></HotArticle>
          </Col>
        </Row>
      </div>
    </div>);
  }
}

export default Home;
