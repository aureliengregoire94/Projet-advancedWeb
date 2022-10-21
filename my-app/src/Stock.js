import React from "react";
import Plot from 'react-plotly.js'



class Stock extends React.Component{

    constructor (props) {
        super(props);
        
        this.state = {
            stockChartXvalues: [], 
            stockChartYvalues: []
        }

    }


    componentDidMount () {
        
    }

    

    stock_search(e) {

        e.preventDefault()

        let symbols = []
        let names = []

        const Api_key = "AO8RJ8LVUMAV2H2U"

        const keywords = document.getElementById("keyword");


        if(keywords.value === null) {
            return null
        }

        const App_url = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + keywords.value + "&apikey=" + Api_key

        fetch(App_url)
        .then(response => response.json())
        .then(function(data) {
            for(var key in data['bestMatches']){
                symbols.push(data['bestMatches'][key]['1. symbol'])
                names.push(data['bestMatches'][key]['2. name'])
                console.log(names)
            }
            let x = document.getElementById("main")
            
            x.innerHTML = ""
            let text = ""
            for(var i = 0; i< names.length ; i++){
                text = "Company name:" + names[i] + " /// Company Symbol" + symbols[i] 
                let new_div = document.createElement('div')
                new_div.innerText = text
                x.appendChild(new_div)
            }
            
            
            
        })

        
        
    }

    

    fetchstock (e) {

        e.preventDefault()

        const pointerTothis = this

        let stockChartXvaluesfunction = []
        let stockChartYvaluesfunction = []

        const Api_key = "AO8RJ8LVUMAV2H2U"
        const Symbol = "BABA"
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
                for(var key in data['Weekly Adjusted Time Series']){
                    stockChartXvaluesfunction.push(key)
                    stockChartYvaluesfunction.push(data['Weekly Adjusted Time Series'][key]['1. open'])
                }

                pointerTothis.setState({
                    stockChartXvalues: stockChartXvaluesfunction, 
                    stockChartYvalues: stockChartYvaluesfunction
                })
            }
            
        )
    }


    render() {
        return(

            <div>
                <div>type here to search for the symbol of a given company</div>
                <input type="text" id="keyword"></input>
                <button onClick = {this.stock_search}>
                    Click here to search
                </button>
                <div id= "main"></div>
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