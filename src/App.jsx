import "./App.css";
import Header from "../components/header";
import About from  "../components/about";
import Interest from "../components/interest";
import Footer from "../components/footer";

function App() {
  return (
  <>
    <div className="container">
      <Header className = "main-header"/>

      <About className="about" />
      <Interest className="interest"/>

    
      <Footer className ="footer"/>
    </div>
  </>
  )
}

export default App;
