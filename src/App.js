import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.requestApi = this.requestApi.bind(this);
    this.searchDog = this.searchDog.bind(this);

    this.state = {
      imageApi: '',
      statusApi: '',
    }
  }

  requestApi() {
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then((result) => result.json())
    .then((obj) => this.setState({
      imageApi: obj.message,
      statusApi: obj.status,
    }))
  }

  componentDidMount() {
    this.requestApi();
  }

  searchDog() {
    this.state.imageApi.includes('terrier') ? alert('terrier') : this.requestApi()
  }

  componentDidUpdate() {
    localStorage.setItem('urlImgDog', this.state.imageApi)
  }

  render() {

    const { imageApi, statusApi } = this.state;

    return (
      <div className="App">
        <header>
          <h1> Requisição à Dog API </h1>
          <h3>com React</h3>
        </header>
        <button type="button" onClick={ this.searchDog }>Search Dog</button>
        <div> 
          {statusApi ? <img src={imageApi} alt={imageApi}/> : <p className="loading">Loading...</p>}
        </div>
        <p>status da API: {  statusApi }</p>
      </div>
    );
  }
}

export default App;
