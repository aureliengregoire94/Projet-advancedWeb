import React from "react";
import Plot from 'react-plotly.js';

class Currency extends React.Component{


    constructor (props) {
        super(props);
        
        this.state = {
            currencyChartXvalues: [], 
            currencyChartYvalues: []
        }
    }


    componentDidMount () {
        this.fetchcurrency();
    }


    fetchcurrency () {

        const pointerTothis = this

        let currencyChartXvaluesfunction = []
        let currencyChartYvaluesfunction = []

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
                    currencyChartXvaluesfunction.push(key)
                    currencyChartYvaluesfunction.push(data['Weekly Adjusted Time Series'][key]['1. open'])
                }

                pointerTothis.setState({
                    currencyChartXvalues: currencyChartXvaluesfunction, 
                    currencyChartYvalues: currencyChartYvaluesfunction
                })
            }
            
        )

        console.log(currencyChartYvaluesfunction)
    }


    

    render() {
        return(
            <div>
                <div class = "currencies">
                <form id="searchbox1" method="get">
                <p>Currency 1</p>
                    <br/><br/>
                    <input name="q" type= "text" size="15" placeholder="Type here ..." />
                    <input id="button-submit" type="submit" value="Search" />
                </form>
                <form id="searchbox2" method="get">
                <p>Currency 2</p>
                 <br/><br/>
                 <input name="q" type= "text" size="15" placeholder="Type here ..." />
                 <input id="button-submit" type="submit" value="Search" />
             </form>
             </div>
             <form>
                    <Plot
                        data={[
                            {
                                x: this.state.currencyChartXvalues,
                                y: this.state.currencyChartYvalues,
                                type: 'scatter',
                                mode: 'lines+markers',
                                marker: {color : 'red'},
                            }

                        ]}
                        layout={{width:720, height: 440, title: 'Currencues values'}}
                    />
                </form>
            </div>
        )
    }
}

export default Currency;