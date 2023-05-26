import Header from './Header/Header';
import Main from './Main/Main';
import './styles/reset.css'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Header/>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
