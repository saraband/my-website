import React from 'react';
import { connect } from 'react-redux';
import { HIDE_PROPERTY_PANEL } from 'AppsActions/immo-app/index'
import Image from './Image'
import s from './ShowPropertyComponent.module.scss'
import { timeSince, prettyPrice } from 'Utils/index'

class ShowPropertyComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  cancelEvent = (event) => {
    if(event.stopPropagation)
      event.stopPropagation()
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
      <div id={s.container} onClick={hidePropertyPanel}>
        <div id={s.box} onClick={this.cancelEvent}>
          <div id={s.image}>
            <Image src={pictureUrl} />
          </div>
          <div id={s.description}>
            <h3>{title}</h3>
            <h4>Located in {place}</h4>
            <p>{description}</p>
            <div id={s.characteristics} >
              <ul>
                <li><strong>Type</strong>: {type}</li>
                <li><strong>Price</strong>: {prettyPrice(price)} € {actionType === 'rent' ? 'per month' : null}</li>
                <li><strong>Surface</strong>: {area} m²</li>
              </ul>
              <ul>
                <li><strong>Rooms</strong>: {numRooms}</li>
                <li><strong>Surface</strong>: {area} m²</li>
                <li><strong>Posted</strong>: {timeSince(date * 1000)}</li>
              </ul>
            </div>
            <button>Get in contact with the vendor</button>
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