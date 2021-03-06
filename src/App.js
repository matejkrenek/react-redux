import CakeContainer from './components/CakeContainer';
import { Provider } from "react-redux"
import store from "./redux/store"
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import MilkShakeContainer from './components/MilkShakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <MilkShakeContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
