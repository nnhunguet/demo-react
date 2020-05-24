import React, { Component } from 'react';
import TodoItem from './components/TodoItem'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.items = [
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
    ];
  }

  render() {
    return (
      <div className="App">
        {
          this.items.map(
            (item,index) => <TodoItem key={index} item={item}/>
          )
        }
      </div>
    );
  }
}

export default App;
