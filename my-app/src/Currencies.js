import React from "react";
import Plot from "react-plotly.js"

class Currencies extends React.Component{



    fetchcurrency() {
        const Api_key = "AO8RJ8LVUMAV2H2U"

        const App_url = "https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&outputsize=full&apikey=" + Api_key
        fetch(App_url)
        .then(response => response.json())
        .then(function(data) {
            console.log(data)
        })
    }

    render() {
        return(
            <div>
                <h1>Currency Market</h1>
                <button onClick={this.fetchcurrency}>request</button>
            </div>
        )
    }
}

export default Currencies