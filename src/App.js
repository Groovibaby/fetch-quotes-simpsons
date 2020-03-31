import React from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

const sampleCharacter = 
  {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
  };


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: sampleCharacter
    };
    this.getCharacter = this.getCharacter.bind(this);
  }
  getCharacter() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          character: data[0],
        });
    });
  }
  render() {
    return (
      <div className="App">
        <QuoteCard character={this.state.character} />
        <button type="button" onClick={this.getCharacter}>Get character</button>
      </div>
    );
  }
}

export default App;
