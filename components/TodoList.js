import React, {
  Component,
  PropTypes,
  ListView,
  View
} from 'react-native'
import Todo from './Todo'

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TodoList extends Component {
  render() {
    const _dataSource = dataSource.cloneWithRows(this.props.todos);

    return (
      <View>
        <ListView
            dataSource={_dataSource}
            renderRow={this._renderRow.bind(this)}
        />
      </View>
    )
  }

  _renderRow(todo: object, sectionID: number, rowID: number) {

    return (
      <Todo
          {...todo}
          onPress={() => this.props.onTodoClick(parseInt(rowID, 10))}
          onDeletePress={() => this.props.onTodoDeleteClick(parseInt(rowID, 10))}
      />
    );
  }
}

TodoList.PropTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
