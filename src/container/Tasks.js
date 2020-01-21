import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkTask, toggleTask } from '../actions';

class Tasks extends Component {
  render() {
    const { tasks, checkTask, filter, toggleFilter } = this.props;

    return (
      <div>
        <h1>TO DO LIST</h1>
        <input type="checkbox" checked={filter} onChange={toggleFilter} />
        {tasks.map(({ description, done }, i) => (
          <React.Fragment>
            <p>
              <input
                type="checkbox"
                checked={done}
                onClick={checkTask.bind(null, i)}
              />
              {description}
            </p>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.tasks);
  return {
    // tasks: state.tasks,
    tasks: state.filter ? state.tasks.filter(task => !task.done) : state.tasks,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    checkTask: index => dispatch(checkTask(index)),
    toggleFilter: () => dispatch(toggleTask()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
