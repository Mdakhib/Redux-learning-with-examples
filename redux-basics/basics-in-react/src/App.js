import './App.css';
import { Provider } from "react-redux";
// import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HookCakeContainer from './components/HookCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* by using connect HOF's */}
        {/* <CakeContainer /> */}
        {/* ------------------------------------------------------------------------- */}
        <HookCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
