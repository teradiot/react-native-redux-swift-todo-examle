import React, {
  Component,
  PropTypes,
  View,
  TextInput,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  render() {
    return (
      <View>
        <TextInput
            style={{height: 40, borderColor: '#0f0f0f', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            autoFocus={true}
            placeholder="What need to be done?"
        />
        <TouchableHighlight
            onPress={(e) => this.handlePress(e)}
            style={styles.button}
            underlayColor="gray"
        >
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    )
  }

  handlePress(e) {
    const text = this.state.text
    this.props.onAddClick(text);
    this.setState({text: ''})
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}

var styles = StyleSheet.create({
  button: {
    borderColor: '#696969',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
  }
})
