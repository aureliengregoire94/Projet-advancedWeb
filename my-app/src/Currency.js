import React from "react";


class Currency extends React.Component{


    

    render() {
        return(
            <div>
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
        )
    }
}

export default Currency;