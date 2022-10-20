import React from "react";




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
            }
        )
    }


    render() {
        return(
            <div>
                <h1>Stock Market</h1>
            </div>
        )
    }
}

export default Stock;