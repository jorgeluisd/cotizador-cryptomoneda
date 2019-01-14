import React, { Component } from 'react';

class Resume extends Component {

    showResume = () => {
        const coinQuote = this.props.coinQuote;
        const {name, quotes} = this.props.quote;
        
        if (!name) return null;

        const {price, percent_change_1h, percent_change_24h} = quotes[coinQuote];
        
        return (<div className="bg-success py-4">
            <div className="resumen text-light text-center">
                <h2 className="mb-4">Resumen</h2>
                <p><span className="text-weight-bold">El Precio de {name} en {coinQuote} es de: </span>$ {(price).toFixed(2)}</p>
                <p><span className="text-weight-bold">Porcentaje Última Hora: </span>{percent_change_1h}%</p>
                <p><span className="text-weight-bold">Porcentaje Últimas 24 Horas: </span>{percent_change_24h}%</p>
            </div>
        </div>)
    }
    render() { 
        return (
            <React.Fragment>
                {this.showResume()}
            </React.Fragment>
        );
    }
}
 
export default Resume;