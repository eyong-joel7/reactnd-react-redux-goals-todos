import API from "goals-todos-api";

export const REMOVE_GOAL = "REMOVE_GOAL";
export const ADD_GOAL = "ADD_GOAL";

 const addGoal = (goal) => ({
    type: ADD_GOAL,
    goal,
  });
  
  const removeGoal = (id) => ({
    type: REMOVE_GOAL,
    id,
  });

  export const handleDeleteGoal = (goal) => {
    return (dispatch) => {
      dispatch(removeGoal(goal.id));
      return API.deleteGoal(goal.id).catch(() => {
        dispatch(addGoal(goal))
        alert('An error occured')
      });
    }
  }
  
  export const handleAddGoal = (goal, cb) => {
  return (dispatch) => {
    return API.saveGoal(goal)
    .then(
      (goal) => {dispatch(addGoal(goal))
      cb();
      }
    )
    .catch(() => alert("An error occured please try again"));
  }
  }