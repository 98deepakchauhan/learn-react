import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span className="badge badge-  m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increase</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
