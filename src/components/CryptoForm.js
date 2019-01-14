import React, { Component } from 'react';
import OptionSelect from './OptionSelect';

class CryptoForm extends Component {

    coinRef = React.createRef();
    cryptoRef = React.createRef();

    getPrice = e => {
        e.preventDefault();

        const data = {
            coin: this.coinRef.current.value,
            crypto: this.cryptoRef.current.value
        }

        this.props.getPrice(data);
    }
    render() { 
        return (
            <form onSubmit={this.getPrice}>
                <div className="form-group">
                    <label>Moneda:</label>
                    <select ref={this.coinRef} className="form-control">
                        <option value="" disabled defaultValue>Elige tu moneda</option>
                        <option value="USD">Dolar Estadiunidense</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="GBP">Libras</option>
                        <option value="EUR">Euros</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Criptomoneda:</label>
                    <select ref={this.cryptoRef} className="form-control">
                        {Object.keys(this.props.cryptos).map(key => (
                            <OptionSelect 
                                key={key}
                                crypto={this.props.cryptos[key]} 
                            />
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Cotizar" />
                </div>
            </form>
        );
    }
}
 
export default CryptoForm;