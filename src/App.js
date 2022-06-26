import logo from './logo.svg';
import './container/index.css'
import { Component } from 'react';
import './App.css';
import AxiosGet from './container/index';
class App extends Component {
  render() {
    return (
      <div>
<AxiosGet/>
      </div>
    );
  }
}
export default App;
