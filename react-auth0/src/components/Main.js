import React, { Component } from 'react';

export default class Main extends Component {
    render() {

        return ( < div >
            <
            p className = "App-intro" >
            Hello, { this.props.name }
            Here!!! < /
            p >
            <
            p >
            Do you want to see more... < a href = "/secret" > Click Here < /a>

            <
            /p> 

            <
            div > please login first... < br / >
            <
            button onClick = { this.props.auth.login } > login < /button> </div >
            <
            /div>



        );
    }

}