import React from 'react';
import {post} from '../../utils/axios';
import {Row, Col, Tag} from 'antd';
import './index.scss'
import HotArticle from "../../components/HotArticle/hotArticle"
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    }

  }

  getDetail(prevProps, prevState, snapshot) {
    post('article/detail', {href: this.props.match.params.id}).then(response => {
      this.setState({details: response});
    })
  }

  componentDidMount() {
    this.getDetail();
  }

  componentWillUnmount( ){
 
 
  }

 
  render() {
  return (<div className="container detail-container">
      <div className="container">
        <Row gutter={[16, 0]}>
          <Col xs={24} md={16}>
            <section className="detail-content v-model v-shadow">
              <div className="detail-title">
                <h1>{this.state.details.title}</h1>
              </div>
              <div className="detail-propety">
                <Row >
                  <Col>
                    <div className="detail-tags">
                      <Tag color="blue">{this.state.details.tags}</Tag>
                    </div>
                  </Col>
                  <Col>
                    <div className="detail-propety-publish">
                      <span>发布于</span>
                      <span>{this.state.details.time}</span>
                    </div>
                  </Col >
                </Row>
              </div>
              <div className="detail-desc" dangerouslySetInnerHTML={{
                   __html: this.state.details.contents
                 }}></div>
            </section>

          </Col>
          <Col xs={24} md={8}>
            <HotArticle></HotArticle>
          </Col>
        </Row>
      </div>
    </div>);
  }
}

export default Detail;
