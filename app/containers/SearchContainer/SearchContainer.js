import { bindActionCreators } from 'redux'
import { Search } from 'components'
import { connect } from 'react-redux'
import * as searchActionCreators from 'redux/modules/search'


function mapStateToProps({search}){
  return {
    searchText : search.text
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({...searchActionCreators}, dispatch)
}



export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Search)
  