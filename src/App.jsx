
import './App.css'
import { Provider } from "react-redux"
import Body from './Components/Body';
import Header from './Components/Header';
import appStore from './Utilities/appStore';

function App() {
  return (
    <Provider store={appStore}> <Body /> </Provider>
  )
}

export default App;
