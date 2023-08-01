import './App.css';
import { Provider } from 'react-redux';
import store from './components/stateManager/store';
import DashBoard from './components/dashboard/dashboard';

function App() {  

  return (
    <>
      <Provider store={store}>
        <DashBoard/>
      </Provider>
    </>
  );
}

export default App;
