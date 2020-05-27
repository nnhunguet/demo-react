import React, { Component } from 'react';
import TodoItem from './components/TodoItem'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
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

    this.onClickItem = this.onClickItem.bind(this);
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

  render() {
    return (
      <div className="App">
        {
          this.state.items.length > 0 && this.state.items.map(
            (item,index) => 
              <TodoItem 
              key={index} 
              item={item} 
              onClick={this.onClickItem(item)}/>
          )
        }
        {
          this.state.items.length === 0 && 'No thing here'
        }
      </div>
    );
  }
}

export default App;
