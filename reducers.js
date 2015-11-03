import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function VisibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      const todo = state[action.index];

      return [
        ...state.slice(0, action.index),
        Object.assign({}, todo, {
          completed: !todo.completed
        }),
        ...state.slice(action.index + 1)
      ]
    case DELETE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  VisibilityFilter,
  todos
})

export default todoApp
