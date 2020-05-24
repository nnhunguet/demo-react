import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
  render() {
    var classNames = require('classnames');
    const { item } = this.props;
    // let className = 'TodoItem';
    // if(item.isComplete) {
    //   className += ' TodoItem-complete';
    // } 
    let className = classNames('TodoItem', {'TodoItem-complete': item.isComplete});
    return (
      <div className={className}>
        <p>{item.title}{item.image}</p>
      </div>
    )
  }
}

export default TodoItem