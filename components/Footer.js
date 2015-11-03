import React, {
  Component,
  PropTypes,
  View,
  TextInput,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'

export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return <Text>{name}</Text>
    }

    return (
      <TouchableHighlight onPress={ e => { this.props.onFilterChange(filter) } }>
        <Text>{name}</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>Show: </Text>
          {this.renderFilter('SHOW_ALL', 'All')}
          <Text>, </Text>
          {this.renderFilter('SHOW_COMPLETED', 'Completed')}
          <Text>, </Text>
      {this.renderFilter('SHOW_ACTIVE', 'Active')}
      <Text>.</Text>
        </View>

        <View>
          <Text>{this.props.leftTodoCount} items left</Text>
        </View>
      </View>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}
