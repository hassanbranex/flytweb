import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Auth extends Component {
    constructor(){
        this.authanticated=true
    }
    static propTypes = {

    }

     login(cb){
        this.authanticated=true 
        cb()
     }

     login(cb){
        this.authanticated=false 
        cb()
     }

     isAuthanticated(){
         return this.authanticated;
     }
}

export default Auth
