import React , {Component} from 'react'
import { bindActionCreators } from 'redux'
import { Search } from 'components'
import { connect } from 'react-redux'
import * as searchActionCreators from 'redux/modules/search'
import { successId } from '../../redux/modules/search';
import {Link ,withRouter, NavLink} from 'react-router-dom'

class SearchContainer extends Component {

  render() {
    return (<Search searchText={this.props.searchText} successId = {this.props.successId}/>
   
   )
  }
  
} 

function mapStateToProps({search}){
 
  return {
    searchText : search.queryText,
    success : search.successId,
    toggle : true
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({...searchActionCreators}, dispatch)
}



export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Search))
  