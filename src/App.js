
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from "./Component/HeaderNavbar/HeaderNavbar"
import Banner from "./Component/Banner/Banner"
import Card from './Component/Card/Card';

function App() {
  return (
    <div className="App">
      <HeaderNavbar/>
      <Banner/>
      <Card/>
    </div>
  );
}

export default App;
