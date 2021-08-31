import React from "react";
import { connect } from "react-redux";
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from "../actions/todos";
import List from "./List";

class Todos extends React.Component {
    addItem = (e) => {
      e.preventDefault();
      const name = this.input.value;
      if(name.length > 0) this.props.dispatch(handleAddTodo(name, () =>  this.input.value = ""))
    };
  
    removeItem = (todo) => {
      this.props.dispatch(handleDeleteTodo(todo));
    }
  
    toggleHandler = (id) => {
      this.props.dispatch(handleToggleTodo(id))
  }
    render() {
      const {todos}  = this.props;
      return (
        <div>
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Add Todo"
            ref={(input) => (this.input = input)}
          />
          <button onClick={this.addItem}>Add Todo</button>
          <List items = {todos} removeItem = {this.removeItem} toggleHandler = {this.toggleHandler}/>
        </div>
      );
    }
  }


  const ConnectedTodos = connect((state) => ({
    todos: state.todos
    }))(Todos);
    
    export default ConnectedTodos;