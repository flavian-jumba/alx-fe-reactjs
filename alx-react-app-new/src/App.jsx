import Header from "./components/Header"
import UserProfile from "./components/UserProfile"
import MainContent from "./components/MainContent"
import Counter from './components/Counter';
function App() {


  return (
    <>
    <Header/>
    <UserProfile name="flavian" age="19" bio="Regression to the mean"/>
    <MainContent/>
    <Counter/>
    </>
  )
}

export default App
