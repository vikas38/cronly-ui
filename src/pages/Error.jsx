import React, { Component } from 'react';

class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>
                  404  
                </h1>
                <br />
                <h3>
                    Something went wrong or page not found ): 💩
                </h3>
            </React.Fragment>
         );
    }
}
 
export default Error;