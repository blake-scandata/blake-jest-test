import React from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Football from './components/Football';

function App() {
  return (
    <div className="App">
      <br />
      <center>
        <table id="componentTable">
          <tbody>
            <tr>
              <td colSpan="2">
                <br />
                <img src={require('./assets/logo.png')} />
                <h2>JEST Demo Application</h2>
              </td>
            </tr>
            <tr>
              <td colSpan="2"><h3>Each of the table cells below is a component with a *.test.js file.</h3></td>
            </tr>
            <tr>
              <td><Button /></td>
              <td><Form /></td>
            </tr>
            <tr>
              <td colSpan="2"><Football /></td>
            </tr>
            <tr>
              <td colSpan="2"><p>Blake Herrera, 2019.</p></td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default App;
