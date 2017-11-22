import React, {Component } from 'react'

import { connect } from 'react-redux'
class RowContainer extends Component {

    constructor ( props) {
        super(props)
    }

    moveLeft = () => {
        /*const list = document.getElementById(this.state.el)
        var val = (parseInt(list.style.left, 10) || 0) + 300
        if (parseInt(list.style.left, 10) >= 0) {
          return
        } else {
          list.style.left = val + 'px'
        }*/
      }
    
      moveRight = () => {
       /* const list = document.getElementById(this.state.el)
        var val = (parseInt(list.style.left, 10) || 0) - 300
        if (parseInt(list.style.left, 10) <= -6500) {
          return
        } else {
          list.style.left = val + 'px'
        }*/
      }


    ComponentDidMount() {

    }
    handleClick(e) {

    }



    render() {

    }
}



function mapStateToProps( props ) {

}


export default connect ( 
    mapStateToProps)(RowContainer)
