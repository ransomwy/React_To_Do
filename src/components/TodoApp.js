import React from 'react';
import List from './List';

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = { items: ["Buy Milk", "Learn React", "Profit"]}
  }

  render(){
    return(
      <div>
      <List items={this.state.itmes} />
      </div>
    )
  }
}

export default TodoApp;
