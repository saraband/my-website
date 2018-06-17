import React from 'react';
import { connect } from 'react-redux';
import { HIDE_PROPERTY_PANEL } from 'AppsActions/immo-app/index'
import Image from './Image'
import s from './ShowPropertyComponent.module.scss'
import Carousel from './Carousel'
import LocationSvg from './location.svg'
import HouseSvg from './house.svg'
import EuroSvg from './euro.svg'
import AreaSvg from './area.svg'
import BedSvg from './bed.svg'
import DateSvg from './date.svg'
import {
  timeSince,
  prettyPrice
} from 'Utils/index'

class ShowPropertyComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSending: false,
      isMessageSent: false
    }
  }

  cancelEvent = (event) => {
    if(event.stopPropagation)
      event.stopPropagation()
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({isSending: true})
    setTimeout(() => this.setState({isMessageSent: true}), 500)
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
      isSending,
      isMessageSent
    } = this.state

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
            <Carousel>
              <img src={pictureUrl} />
              <img src={pictureUrl} />
              <img src={pictureUrl} />
            </Carousel>
          </div>
          <div id={s.description}>
            <h3>{title}</h3>
            <h4><LocationSvg className={s.svgIcon} />Located in {place}</h4>
            <p>{description}</p>
            <div id={s.bottomBox}>
              <div id={s.left}>
                <div id={s.characteristics} >
                  <ul>
                    <li><HouseSvg className={s.svgIcon} /><strong>Type</strong>: {type}</li>
                    <li><EuroSvg className={s.svgIcon} /><strong>Price</strong>: {prettyPrice(price)} € {actionType === 'rent' ? 'per month' : null}</li>
                    <li><AreaSvg className={s.svgIcon} /><strong>Surface</strong>: {area} m²</li>
                    <li><BedSvg className={s.svgIcon} /><strong>Rooms</strong>: {numRooms}</li>
                    <li><DateSvg className={s.svgIcon} /><strong>Posted</strong>: {timeSince(date * 1000)}</li>
                  </ul>
                </div>
              </div>
              <div id={s.right}>
                <form onSubmit={this.handleSubmit}>
                  <input type='text' placeholder='Your email' disabled={isMessageSent || isSending}/>
                  <input type='text' placeholder='Your phone' disabled={isMessageSent || isSending}/>
                  <input type='text' placeholder='Your name' disabled={isMessageSent || isSending}/>
                  <textarea placeholder='Your message' disabled={isMessageSent || isSending}/>
                  <button disabled={isMessageSent || isSending}>{isMessageSent ? 'Message sent !' : (isSending ? 'Sending message..' : 'Contact the vendor')}</button>
                </form>
              </div>
            </div>
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