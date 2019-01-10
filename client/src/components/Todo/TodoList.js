import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import axios from "axios";

class TodoList extends React.Component {
  state = { tasks: [] };

  addTask = () => {
    // axios.post(``)
    // .then()
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <TodoForm addTask={this.addTask} />
        {/* {tasks.map(task => {
          <Todo key={task.id} />;
        })} */}
      </div>
    );
  }
}

export default TodoList;
