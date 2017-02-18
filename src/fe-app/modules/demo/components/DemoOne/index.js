import './style.css';
import React,{Component} from react;

class DemoOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrap">
          <div className="content">
              Content here.
          </div>
      </div>
    );
  }
}

export default DemoOne;
