import React from 'react';
import { connect } from 'react-redux';
import close from './close.png'
import { HIDE_PROPERTY_PANEL } from 'AppsActions/immo-app/index'
import Image from './Image'
import s from './ShowPropertyComponent.module.scss'

class ShowPropertyComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      isRetrievingPropertyData,
      propertyData,
      hidePropertyPanel
    } = this.props

    if(isRetrievingPropertyData) {
      // Do something ?
    }

    const {
      id,
      pictureUrl,
      title,
      description,
      type,
      actionType,
      price,
      area,
      numRooms,
      place,
      date,
    } = propertyData

    return(
      <div id={s.container}>
        <div id={s.box}>
          <img src={close} id={s.close} onClick={hidePropertyPanel}/>
          <div id={s.image}>
            <Image src={pictureUrl} />
          </div>
          <div id='show-property-description'>
            {title}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isRetrievingPropertyData: state.immoApp.isRetrievingPropertyData,
    propertyData: state.immoApp.currentPropertyData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hidePropertyPanel: () => dispatch({type: HIDE_PROPERTY_PANEL})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ShowPropertyComponent)