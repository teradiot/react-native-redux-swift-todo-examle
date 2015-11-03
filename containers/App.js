import React from 'react-native'
import { connect } from 'react-redux/native'
import { addTodo, completeTodo, deleteTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  PropTypes
} = React;


class App extends Component {
  render() {
    const { dispatch, visibleTodos, visibilityFilter, leftTodoCount } = this.props

    return (
      <View style={{ padding: 40, flex: 1}}>
        <AddTodo
            onAddClick={text => dispatch(addTodo(text))} />
        <TodoList
            todos={visibleTodos}
            onTodoClick={index => dispatch(completeTodo(index))}
            onTodoDeleteClick={index => dispatch(deleteTodo(index))} />
        <Footer
            filter={visibilityFilter}
            leftTodoCount={leftTodoCount}
            onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))} />
      </View>
    )
  }
  render2() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Swift & React Native & Redux!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

App.propTypes = {
  VisibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired,
  leftTodoCount: PropTypes.number.isRequired
}


function selectTodos(todos, filter) {
  switch(filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.VisibilityFilter),
    visibilityFilter: state.VisibilityFilter,
    leftTodoCount: selectTodos(state.todos, VisibilityFilters.SHOW_ACTIVE).length
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default connect(select)(App)
