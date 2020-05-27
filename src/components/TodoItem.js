import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
  render() {
    var classNames = require('classnames');
    const { item, onClick } = this.props;
    let className = classNames('TodoItem', {'TodoItem-complete': item.isComplete});
    return (
      <div className={className} onClick={onClick}>
        <p>{item.title}</p>
      </div>
    )
  }
}

export default TodoItem