import './style.css';
import React,{Component} from 'react';

class Demo02 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap-two">
          <div className="content-two">
              Hello React!
          </div>
      </div>
    );
  }
}

export default Demo02;
