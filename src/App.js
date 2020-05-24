import React, { Component } from 'react';
import TodoItem from './components/TodoItem'
import './App.css';
import { ReactComponent as Star } from './components/icon/star.svg'
import { ReactComponent as Clock } from './components/icon/clock.svg'
import { ReactComponent as Mail } from './components/icon/mail.svg'

class App extends Component {
  constructor() {
    super();
    this.items = [
      { 
        title: 'Mua bim bim',
        image: <Star/>,
        isComplete: true
      },
      { 
        title: 'Đi đá bóng',
        image: <Clock/>,
        isComplete: false
      },
      { 
        title: 'Đi đổ xăng',
        image: <Mail/>,
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
