import React, { Component } from 'react'

import * as style from './Castcomponent.css'
import PropTypes from 'prop-types'

class CastComponent extends Component {
  render () {
    const imgSrc = 'https://image.tmdb.org/t/p/w154/'
  
    return (
      <div id={style.cast}> <div >{'Top Billed Cast'}</div> <ul id ={style.castList}>
        {/* PS - Can we consider changing the name each to something more descriptive, like castMember? */}
        {(this.props.cast).map((actor, key) => {
          

          return (
            <li key = {key} >
              <div id={style.actorsStyle} >
                <div id={style.actors}>
                  {/* PS - It's great that you have an alt tag here for accessibility! */}
                  <img id={style.actorPic} src={imgSrc + actor.profile_path} alt={'picture of ' + actor.name} />
                </div>
                {(actor.name).length <= 14 ?
                <h4> {actor.name} </h4>
                :<h4 style={{margin :'0 0 9px 0'}}> { actor.name} </h4>
                }
                
                

                <h6>{actor.character}</h6>
              </div>
            </li>
          )
        })}
      </ul>
      </div>
    )
  }
}

CastComponent.propTypes = {
  cast: PropTypes.array.isRequired
}

export default CastComponent
