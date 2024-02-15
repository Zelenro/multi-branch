// import logo from './logo.svg';
import './App.css';
import Contacts from './Contacts/Contacts';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Phonebook
        </a>
      </header> */}
      <Contacts />
    </div>
  );
}

export default App;
