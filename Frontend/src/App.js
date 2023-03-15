import "./App.css";
import Home from "./components/Home/Home";
import Header from './components/NavigationBar/Navbar/Header'

function App() {
  return (
    <div style={{ padding: "1px" }}>
      <Header/>
      <Home />
    </div>
  );
}

export default App;
