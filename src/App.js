import React, { Component } from 'react';
import TodoItem from './components/TodoItem'
import './App.css';
import classNames from 'classnames'

import { ReactComponent as Spider} from './components/icon/spider.svg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentFilter: 'all',
      items: [
        { 
          title: 'Mua bim bim',
          isComplete: true
        },
        { 
          title: 'Đi đá bóng',
          isComplete: false
        },
        { 
          title: 'Đi đổ xăng',
          isComplete: false
        }
      ]
    };

    // this.onClickItem = this.onClickItem.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.handleFilterAll = this.handleFilterAll.bind(this);
    this.handleFilterActive = this.handleFilterActive.bind(this);
    this.handleFilterComplete = this.handleFilterComplete.bind(this);
  }

  onClickItem(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { items } = this.state;
      const index = items.indexOf(item);
      this.setState( 
        {
          items: [
            ...items.slice(0, index),
            {
              ...item,
              isComplete: !isComplete
            },
            ...items.slice(index + 1)
          ]
        }
      )
    }
  };

  onKeyUp(event) {
    const {items} = this.state;
    let text = event.target.value;
    if(!text) {
      return;
    }

    text = text.trim();
    if(!text) {
      return;
    }

    if(event.keyCode === 13) {
      this.setState({
          items: [
            ...items,
            {
              title: event.target.value,
              isComplete: false
            }
          ]
      })
      event.target.value = '';
    };
  }

  handleFilterAll() {
    this.setState({
      currentFilter: 'all'
    })
  }

  handleFilterActive() {
    this.setState({
      currentFilter: 'active'
    })
  }

  handleFilterComplete() {
    this.setState({
      currentFilter: 'complete'
    })
  }

  render() {
    const {items, currentFilter} = this.state;
    let filterItems ;

    switch(currentFilter) {
      case 'all':
        filterItems = [...items];
        break;
      case 'active':
        filterItems = [...items].filter( (item) => item.isComplete === false );
        break;
      case 'complete':
        filterItems = [...items].filter( (item) => item.isComplete === true );
        break;
      default:
        break;
    }
    return (
    
      <div className="App">
        <p>{console.log(filterItems)}</p>
        <h1>Todo Items</h1>
        <div className='Header'>
          <Spider className='spider'/>
          <input type='text' placeholder='Add a new item' onKeyUp={this.onKeyUp}></input>
        </div>
        {
          filterItems.length > 0 && filterItems.map(
            (item,index) => 
              <TodoItem 
              key={index} 
              item={item} 
              onClick={this.onClickItem(item)}/>
          )
        }
        {
          filterItems.length === 0 && <p className='nothing'>'No thing here'</p>
        }
        <div className='Footer'>
          <p className='quantityItems'>{filterItems.length} items left </p>
          <div className='wrap-btn-footer'>
            <button onClick={this.handleFilterAll} className={classNames({'btn': currentFilter === 'all'})}>All</button>
            <button onClick={this.handleFilterActive} className={classNames({'btn': currentFilter === 'active'})}>Active</button>
            <button onClick={this.handleFilterComplete} className={classNames({'btn': currentFilter === 'complete'})}>Complete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
