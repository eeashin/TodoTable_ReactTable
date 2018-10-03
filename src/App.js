import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "", description: "", todos: [] };
  }

  inputChanged = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    const todoObject = {};
    todoObject.date = this.state.date;
    todoObject.description = this.state.description;
    this.setState({
      todos: [...this.state.todos, todoObject]
    });
  };

  deleteItem = event => {
    const index = parseInt(event.target.id);
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
    });
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <fieldset className="container">
          <legend>Add To Do: </legend>
          <form onSubmit={this.addTodo}>
            <label>Date: </label>
            <input type="text" name="date" onChange={this.inputChanged} value={this.state.date} />
            <label>Description: </label>
            <input
              type="text" name="description" onChange={this.inputChanged} value={this.state.description} />
            <input type="submit" value="Add" />
          </form>
        </fieldset>
        <div className="App">
          <ReactTable
            data={this.state.todos}
            columns={[
              {
                Header: "Date",
                accessor: "date"
              },
              {
                Header: "Description",
                accessor: "description"
              },
              {
                Header: "",
                accessor: "row.index",
                Cell: row => (
                  <button onClick={this.deleteItem} id={row.index}>{" "} Delete</button>
                )
              }
            ]}
            defaultPageSize={10} className="-striped -highlight" />
        </div>
      </div>
    );
  }
}

export default App;
