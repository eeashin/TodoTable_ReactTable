import React, { Component } from "react";
import "react-table/react-table.css";
import "./App.css";
import ReactTable from "react-table";

class TodoTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log();
    return (
      <div>
        <ReactTable data={this.props.todos} columns={this.props.columns} />
      </div>
    );
  }
}
export default TodoTable;
