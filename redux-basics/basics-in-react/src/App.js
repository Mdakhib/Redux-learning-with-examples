import './App.css';
import { Provider } from "react-redux";
// import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import UserContainer from "./components/UserContainer";
// import HookCakeContainer from './components/HookCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import CounterContainer from './components/CounterContainer';
// import CakeContainerwithPayload from './components/CakeContainerwithPayload';
// import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* by using connect HOF's */}
        {/* <CakeContainer /> */}
        {/* <IceCreamContainer /> */}
        {/* <CounterContainer /> */}
        {/* ------------------------------------------------------------------------- */}
        {/* by using connect HOF's along with action payload */}
        {/* <CakeContainerwithPayload /> */}
        {/* ------------------------------------------------------------------------- */}
        {/* by using hook useSelector and useDispatch */}
        {/* <HookCakeContainer /> */}
        {/* ------------------------------------------------------------------------- */}
        {/* using ownProps in mapStateToProps */}
        {/* <ItemContainer propsPassingByChildComponentToParentAsOwnProps /> */}
        {/* <ItemContainer  /> */}
        {/* ------------------------------------------------------------------------- */}
        {/* Fetching an API  */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
