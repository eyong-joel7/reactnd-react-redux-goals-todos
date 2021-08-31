import React from "react";
import { connect } from "react-redux";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";
import List from "./List";

class Goals extends React.Component {
  addItem = (e) => {
    e.preventDefault();
    const name = this.input.value;
    name.length > 0 &&
      this.props.dispatch(handleAddGoal(name, () => (this.input.value = "")));
  };

  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal));
  };

  render() {
    const { goals } = this.props;
    return (
      <div>
        <h1>Goal List</h1>
        <input
          type="text"
          placeholder="Add Goal"
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List items={goals} removeItem={this.removeItem} />
      </div>
    );
  }
}
const ConnectedGoal = connect((state) => ({
    goals: state.goals
    }))(Goals);
    
export default ConnectedGoal;