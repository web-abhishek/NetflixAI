  import './App.css'
  import { useSelector } from 'react-redux'
  import AppRouter from './routes/AppRouter'
  import PageLoader from './components/PageLoader'

  function App() {
    const isLoading = useSelector((store) => store.loader.isLoading)

    return (
      <div className="bg-d">
        {isLoading && <PageLoader />}
        <AppRouter />
      </div>
    )
  }

  export default App
