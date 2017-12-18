import React, { Component } from 'react'

import * as style from './Castcomponent.css'
import PropTypes from 'prop-types'

class CastComponent extends Component {
  render () {
    const imgSrc = 'https://image.tmdb.org/t/p/w154/'

    return (
      <div id={style.cast}> {'Top Billed Cast'} <ul id ={style.castList}>
        {(this.props.cast).map((each, key) => {
          return (
            <li key = {key} >
              <div id={style.actorsStyle} >
                <div id={style.actors}>
                  <img id={style.actorPic} src={imgSrc + each.profile_path} alt={'picture of ' + each.name} />
                </div>
                <h4>{each.name}</h4>
                <h6>{each.character}</h6>
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
  cast: PropTypes.object.isRequired
}

export default CastComponent
