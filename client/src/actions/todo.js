// @flow

/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export const addTodo = (text: String) => {
  return { type: ADD_TODO, text }
}

export const toggleTodo = (index: String) => {
  return { type: TOGGLE_TODO, index }
}

export const setVisibilityFilter = (filter: String) => {
  return { type: SET_VISIBILITY_FILTER, filter }
}
