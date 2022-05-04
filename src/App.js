import './App.css';
import { Provider } from 'react-redux';
import store from './components/stateManager/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
      </div>
    </Provider>
  );
}

export default App;
