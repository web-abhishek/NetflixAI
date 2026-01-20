  import './App.css'
  import { useSelector } from "react-redux"
  import Body from './Components/Body';
  import PageLoader from './Components/PageLoader';

  function App() {

    const isLoading = useSelector((store) => store.loader.isLoading);

    return (
      <div className='bg-d'>
        {isLoading && <PageLoader />}
        <Body />
      </div>
    )
  }

  export default App;
