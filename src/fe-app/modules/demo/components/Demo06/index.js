import './style.css';
import React,{Component} from 'react';

class Demo06 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap06">
          <div className="floater"></div>
          <div className="content06">
              Hello React!
          </div>
      </div>
    );
  }
}

export default Demo06;
