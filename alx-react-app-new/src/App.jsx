import Header from "./components/Header"
import UserProfile from "./components/UserProfile"
import MainContent from "./components/MainContent"
function App() {


  return (
    <>
    <Header/>
    <UserProfile name="flavian" age="19" bio="Regression to the mean"/>
    <MainContent/>
    </>
  )
}

export default App
