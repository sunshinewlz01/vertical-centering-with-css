import './style.css';
import React,{Component} from 'react';

class Demo01 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap-one">
          <div className="content-one">
              Hello React!
          </div>
      </div>
    );
  }
}

export default Demo01;
