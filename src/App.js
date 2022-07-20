import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemsContainer from './components/ItemsContainer';
import UserContainer from './components/UsersContainer'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemsContainer cake />
        <ItemsContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <UserContainer />
    </div>
    </Provider>

  )
}

export default App;
