import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {value: '', sumCompleted: 1, data: props.data};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.deleteAllCompleted = this.deleteAllCompleted.bind(this);
    }
    handleChange (event) {
      this.setState({value: event.target.value});
    }
    handleSubmit (event) {
      if (this.state.value.trim().length > 0) {
        this.setState({ data: [...this.state.data, {text: this.state.value, isCompleted: false}] })
        this.setState({ value: '' });
      }
      event.preventDefault();
    }
    removeItem (item) {
      this.setState({ data: this.state.data.filter((todo) => { return todo !== item }) });
    }
    changeCompletedStatu (i) {
      let tempData = this.state.data;
      tempData[i].isCompleted = !tempData[i].isCompleted;
      this.setState({ data: tempData });
    }
    deleteAllCompleted () {
      this.setState({ data: this.state.data.filter((todo) => { return !todo.isCompleted }) });
		}

    render() {
      const listItems = this.state.data.map((item, i) =>
        <li>
          {item.isCompleted ? (
            <div>
              <span className="padding-left-15" onClick={this.changeCompletedStatu.bind(this, i)}><img src="icons/checked.png" alt="" /></span>
              <span className="done-true padding-left-15">{item.text}</span>
              <span onClick={this.removeItem.bind(this, item)} className="pull-right"><img src="icons/delete.png"/></span>
            </div>
          ) : (
            <div>
              <span className="padding-left-15" onClick={this.changeCompletedStatu.bind(this, i)} ><img src="icons/check.png" alt="" /></span>
              <span className="padding-left-15">{item.text}</span>
              <span id="removeTodo" onClick={this.removeItem.bind(this, item)} className="pull-right"><img src="icons/delete.png"/></span>
            </div>
          )}
        </li>
      );

      let completedCount = this.state.data.filter(props => props.isCompleted).length;

      return (
        <div>
            <h2>You've got <span className="emphasis">{this.state.data.length}</span> things to do <p>Completed { completedCount } task!</p> </h2>

            <ul>{listItems}</ul>
            <form onSubmit={this.handleSubmit}>
              <input type="text" className="add-input" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" className="add-btn" value="Submit" />
            </form>

            <button className="clear-btn" onClick={this.deleteAllCompleted}>Clear completed</button>
        </div>
      );
    }
}

export default App;
