import React, { Component } from 'react';
import './TodoItem.css';
import { ReactComponent as Check } from './icon/check.svg';
import { ReactComponent as CheckComplete } from './icon/check-complete.svg'


class TodoItem extends Component {
  render() {
    var classNames = require('classnames');
    const { item, onClick } = this.props;
    let className = classNames('TodoItem', {'TodoItem-complete': item.isComplete});
    return (
      <div className={className}>
        {
          item.isComplete ? <CheckComplete onClick={onClick}/> : <Check onClick={onClick}/>
        }
        <p>{item.title}</p>
      </div>
    )
  }
}

export default TodoItem