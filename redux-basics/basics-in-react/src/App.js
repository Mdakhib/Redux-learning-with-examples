import './App.css';
import { Provider } from "react-redux";
// import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
// import HookCakeContainer from './components/HookCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
import CounterContainer from './components/CounterContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* by using connect HOF's */}
        {/* <CakeContainer /> */}
        {/* <IceCreamContainer /> */}
        <CounterContainer />
        {/* ------------------------------------------------------------------------- */}
        {/* by using hook useSelector and useDispatch */}
        {/* <HookCakeContainer /> */}
        {/* ------------------------------------------------------------------------- */}
      </div>
    </Provider>
  );
}

export default App;
