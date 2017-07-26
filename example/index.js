import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';
import ReactAnchor from '../src/anchor.js';

const navPanel = [{
  title: 'test1',
  href: 'test1',
}, {
  title: 'test2',
  href: 'test2',
}, {
  title: 'test3',
  href: 'test3',
}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: '0',
    };
  }

  scrollNavHandler() {
    let top = document.getElementsByClassName('container')[0].scrollTop;
    this.setState({
      scrollTop: top
    });
  }

  clickA() {
    console.log(11111);
  }
  render() {
    return (
      <div className="container" onScroll={this.scrollNavHandler.bind(this)} onClick ={this.clickA.bind(this)}>
        {
          navPanel.map((item, idx) => {
            return (
              <div id={item.href} className={item.href + ' test'} key={idx}></div>
            )
          })
        }
         <ReactAnchor
            parentClassName="container"
            anchorList={navPanel}
            top={this.state.scrollTop}
            firstBlockTop={50}
            blockTotalHeight={400}
          />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('example')
);