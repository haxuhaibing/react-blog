import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import axios from '../../utils/axios';
import {Tag} from 'antd';
import './index.scss'
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    }

  }

  getDetail() {

 
    axios.post('http://api.xuhaibing.io/v1/article/detail', {href: this.props.match.params.id}).then(response => {
      this.setState({details: response});
    })
  }

  componentDidMount() {
    this.getDetail();

  }
  render() {

    return (<div>
      <div className="detail-title">
        <h1>{this.state.details.title}</h1>
      </div>
      <div className="detail-propety">
        <div className="detail-tags">
          <Tag color="blue">{this.state.details.tags}</Tag>
        </div>
        <div className="detail-propety-publish">
          <span>发布于{this.state.details.time}</span>
        </div>

      </div>
      <div className="detail-desc" dangerouslySetInnerHTML={{
          __html: this.state.details.contents
        }}></div>
    </div>);
  }
}

export default Detail;
