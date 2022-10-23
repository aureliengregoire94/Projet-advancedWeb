import React from "react";
import Plot from "react-plotly.js"

class Currencies extends React.Component{



    fetchcurrency() {

        let stockChartXvaluesfunction = []
        let stockChartYvaluesfunction = []

        const Api_key = "AO8RJ8LVUMAV2H2U"

        const App_url = "https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&outputsize=full&apikey=" + Api_key
        fetch(App_url)
        .then(response => response.json())
        .then(function(data) {
            console.log(data)
            for(var key in data['Time Series FX (5min)']){
                stockChartXvaluesfunction.push(key)
                stockChartYvaluesfunction.push(data['Time Series FX (5min)'][key]['1. open'])
            } 
            
            localStorage.setItem('x-axis1', stockChartXvaluesfunction)
            localStorage.setItem('y-axis1', stockChartYvaluesfunction)
        })

        console.log(localStorage.getItem('y-axis1'))
    }

    render() {
        return(
            <div>
                <h1>Currency Market</h1>
                <button onClick={this.fetchcurrency}>request</button>

                <Plot id = "plot1"
                    data={[
                    {
                        x: localStorage.getItem('x-axis1').split(','),
                        y: localStorage.getItem('y-axis1').split(','),
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    ]}
                    layout={ {width: 1900, height: 900, title: 'Currency plot'} }
                    />
            </div>
            
            
        )
    }
}

export default Currencies