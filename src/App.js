import { Component } from 'react'
import CardsContainer from './CardsContainer'
import Card from './Card'


import './App.css';

class App extends Component {

  state = {
    allCharacters: [],
    selectedCharacters: []
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character/')
    .then(parseJson)
    .then(data => {
      this.setState({allCharacters: data.results})
      this.setState({selectedCharacters: data.results})

    })
  }

render(){
    return (
      <div className="App">
        <h1>lets pick this up</h1>
        <CardsContainer characters={this.state.selectedCharacters}/>
      </div>
    );
  }
}

function parseJson(response){
  return response.json()
}

export default App;
