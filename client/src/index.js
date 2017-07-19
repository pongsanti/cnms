/* global document */
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers/reducer';
import { addTodo } from './actions/todo';

import HelloWorld from './HelloWorld';


// css
import './css/bootstrap/bootstrap.less';
// import 'bootstrap/dist/css/bootstrap-theme.css'
import './css/style.scss';


const element = document.createElement('div');
element.id = 'root';
document.body.appendChild(element);

ReactDOM.render(
  HelloWorld(),
  document.getElementById('root'),
);

const store = createStore(todoApp);
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('Learn about actions'));

unsubscribe();
