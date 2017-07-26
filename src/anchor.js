import React, {
  Component
} from 'react'
import {
  Link
} from "react-router"
import PropTypes from 'prop-types'
import isEqual from 'lodash.isequal'
import {
  Timeline
} from 'antd'
import './anchor.less'
import 'antd/dist/antd.css';


// import { editorOptions, editorEvents } from './editorOptions.js'

export default class ReactAnchor extends Component {
  constructor(props) {
      super(props);
      // editorEvents.forEach(method => {
      //   this[method] = this[method].bind(this);
      // });
      this.state = {
        curPanelNavIndex: ''
      }
    }
    // static propTypes = {
    //   top: React.PropTypes.string,
    //   firstBlockTop: ,
    //   blockTotalHeight: ,
    //   anchorList: ,
    //   model: React.PropTypes.string.isRequired,
    //   title: React.PropTypes.string
    // }

  // static defaultProps = {
  //   top: 0
  //   model: {
  //     id: 0
  //   },
  //   title: 'Your Name'
  // }


  componentWillReceiveProps(nextProps) {
    const {
      top,
      firstBlockTop,
      blockTotalHeight,
      anchorList
    } = this.props;

    if (nextProps.top && top != nextProps.top) {
      let curNavIndex = Math.floor((nextProps.top - firstBlockTop) / blockTotalHeight);
      if (this.getScrollTop() + this.getWindowHeight() == this.getScrollHeight()) {
        this.setState({
          curPanelNavIndex: anchorList.length - 1
        })
      } else {
        this.setState({
          curPanelNavIndex: curNavIndex
        })
      }
    }
  }


  //滚动条在Y轴上的滚动距离
  getScrollTop = () => {
    const {
      parentClassName
    } = this.props;
    let scrollTop, bodyScrollTop = 0,
      documentScrollTop;
    documentScrollTop = document.getElementsByClassName(parentClassName)[0].scrollTop;
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  }

  //浏览器视口的高度
  getWindowHeight = () => {
    const {
      parentClassName
    } = this.props;
    let windowHeight;
    windowHeight = document.getElementsByClassName(parentClassName)[0].clientHeight;
    return windowHeight;
  }

  getScrollHeight = () => {
    const {
      parentClassName
    } = this.props;
    let scrollHeight, bodyScrollHeight = 0,
      documentScrollHeight;
    documentScrollHeight = document.getElementsByClassName(parentClassName)[0].scrollHeight;
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
  }

  render() {
    const {
      anchorList
    } = this.props;
    const {
      curPanelNavIndex
    } = this.state;
    return (
      <div className="nav-panel">
        <Timeline>
          {
            anchorList.map((item, index) => {
              if (index == curPanelNavIndex) {
                return (
                  <Timeline.Item key={index} className="active"><Link href={"#" + item.href} className="link-title">{item.title}</Link></Timeline.Item>
                )
              } else {
                return (
                  <Timeline.Item key={index} ><Link href={"#" + item.href} className="link-title">{item.title}</Link></Timeline.Item>
                )
              }       
            })
          }
        </Timeline>
      </div>
    );
  }
}

// ReactAnchor.propTypes = {
//   top: PropTypes.string,
//   parentClassName: PropTypes.string.isRequired,
//   anchorList: PropTypes.array.isRequired,
//   firstBlockTop: PropTypes.number,
//   blockTotalHeight: PropTypes.number.isRequired
// };
ReactAnchor.defaultProps = {
  top: '0',
  parentClassName: 'body',
  anchorList: [{
    href: '',
    title: ''
  }],
  firstBlockTop: 0,
  blockTotalHeight: 100,
};