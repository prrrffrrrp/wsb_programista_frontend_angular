import React from "react";
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            limit: 10
        }
    }

    componentDidMount() {
        this.getPokemons(); // triggers getPokemons just after render()
    }
    
    getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon', {  // old url before using 'params' dict: 'https://pokeapi.co/api/v2/pokemon?limit=100'
            params: {
                limit: this.state.limit
            }
        })
            .then((response) => {
                const result = response.data.results;
                console.log(result);
                this.setState({pokemons: result}) // this fills up pokemons list with objects
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onLimitChange = (e) => {
        const newLimit = Number(e.target.value)
        this.setState({limit: newLimit})
    }
  render() {
    return (
      <div>
        <h1>Pokemon</h1>
          <input type='number' value={this.state.limit} onChange={this.onLimitChange}/>
        <button onClick={this.getPokemons}>Get Pokemons</button>
          {
              this.state.pokemons.map((poke, i) => <p key={i}>{poke.name}</p>)
          }
      </div>
    );
  }
}
