import React, {
  Component,
  PropTypes,
  TouchableHighlight,
  Text,
  View
} from 'react-native'

export default class Todo extends Component {
  renderTodoText() {
    return (
      <TouchableHighlight onPress={this.props.onPress.bind(this)}>
        <Text style={{textDecorationLine: this.props.completed ? 'line-through' : 'none'}}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    )
  }

  renderCompletedTodoText() {
    return (
      <TouchableHighlight onPress={this.props.onDeletePress}>
        <Text>X</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        { this.renderTodoText() }
        { this.props.completed && this.renderCompletedTodoText() }
      </View>
    )
  }
}

Todo.propTypes = {
  onPress: PropTypes.func.isRequired,
  onDeletePress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
