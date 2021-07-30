import ReactDOM from 'react-dom'
import { App } from './App'

console.log(localStorage.getItem('name'));

ReactDOM.render(<App />, document.getElementById('root'))
