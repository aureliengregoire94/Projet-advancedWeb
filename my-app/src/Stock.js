import React from "react";
import Plot from 'react-plotly.js';

class Stock extends React.Component{

    constructor (props) {
        super(props);
        
        this.state = {
            stockChartXvalues: [], 
            stockChartYvalues: []
        }
    }


    componentDidMount () {
        this.fetchstock();
    }


    fetchstock () {

        const pointerTothis = this

        let stockChartXvaluesfunction = []
        let stockChartYvaluesfunction = []

        const Api_key = "AO8RJ8LVUMAV2H2U"
        const Symbol = "AMZN"
        const App_url = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=" + Symbol + "&apikey=" + Api_key

        fetch(App_url)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data){
                console.log(data)
                for(let key in data['Weekly Adjusted Time Series']){
                    stockChartXvaluesfunction.push(key)
                    stockChartYvaluesfunction.push(data['Weekly Adjusted Time Series'][key]['1. open'])
                }

                pointerTothis.setState({
                    stockChartXvalues: stockChartXvaluesfunction, 
                    stockChartYvalues: stockChartYvaluesfunction
                })
            }
            
        )

        console.log(stockChartYvaluesfunction)
    }


    render() {
        return(
            <div>
                <h1>Stock Market</h1>
                <Plot
                data={[
                    {
                        x: this.state.stockChartXvalues, 
                        y: this.state.stockChartYvalues, 
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color : 'red'},
                    }
                    
                ]}
                layout={{width:720, height: 440, title: 'stock value'}}
                />
            </div>
        )
    }
}

export default Stock;