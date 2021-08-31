import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import ConnectedGoal from "./Goals";
import ConnectedTodos from "./Todos";


class App extends React.Component {
  componentDidMount(){
      const {dispatch}  = this.props;
      dispatch(handleInitialData());
  }
render() {
  const {loading}  = this.props;
 if(loading) return <h3>loading ...</h3>
  return (
    <div>
     <ConnectedTodos/>
      <ConnectedGoal/>
    </div>
  );
}
}
export default connect((state) => ({
  loading: state.loading
  }))(App);

