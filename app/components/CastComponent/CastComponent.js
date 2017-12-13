import React, { Component } from 'react'

import * as style from './Castcomponent.css'
import PropTypes from 'prop-types'



class CastComponent extends Component {
    constructor (props) {
      super(props)
      console.log(this.props.detail)
      
    }

    render () 
    {
        const imgSrc = 'https://image.tmdb.org/t/p/w154/'
       
        return (
            <div id={style.cast}> {'CAST'} 
  <h4>{'Top Billed Cast'}</h4>
            {(this.props.cast).map((each, key ) => {
                
                return (
                    <div id={style.actorsStyle} key={key}>
                    <div id={style.actors}>
                    <img id={style.actorPic} src={imgSrc + each.profile_path} alt={'picture of ' + each.name} />
                    </div>
                    <h3>{each.name}</h3>
                    <h6>{each.character}</h6>
                    </div>
                )
            })}
            </div>
        )
    }
}

 
export default CastComponent 