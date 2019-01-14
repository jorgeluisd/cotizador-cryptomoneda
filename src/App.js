import React, { Component } from 'react';
import Header from './components/Header';
import CryptoForm from './components/CryptoForm';
import axios from 'axios';
import Resume from './components/Resume';

class App extends Component {

  state = {
    cryptos: [],
    quote: {},
    coinQuote: '',
    load: false
  }

  async componentDidMount() {
    this.getCryptos();
  }

  getCryptos = async () => {
    const url = `https://api.coinmarketcap.com/v2/ticker/`;

    await axios.get(url)
      .then(response => {
        this.setState({
          cryptos: response.data.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  getPrice = async (data) => {

    const {coin, crypto} = data;
    
    const url = `https://api.coinmarketcap.com/v2/ticker/${crypto}?convert=${coin}`;

    await axios.get(url)
      .then(response => {
        this.setState({
          load: true
        })
        //El setTimeout no hace falta, pero para poder ver el efecto del spinner lo colocamos
        setTimeout(() => {
          this.setState({
            quote: response.data.data,
            coinQuote: coin,
            load: false
          })
        },500)
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {

    const load = this.state.load;

    let spinner

    if (load) {
      spinner = <div className="spinner">
                  <div className="rect1"></div>
                  <div className="rect2"></div>
                  <div className="rect3"></div>
                  <div className="rect4"></div>
                  <div className="rect5"></div>
                </div>
    } else {
      spinner = <Resume 
                  quote = {this.state.quote}
                  coinQuote = {this.state.coinQuote}
                />
    }

    return (
      <div className="container">
        <Header
          title= "Cotiza Criptomonedas al Instante"
        />

        <div className="row justify-contnent-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
            <CryptoForm 
              cryptos = {this.state.cryptos}
              getPrice = {this.getPrice}
            />
            {spinner}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
