import React from 'react';
import { connect } from 'react-redux';
import close from './close.png'
import { HIDE_PROPERTY_PANEL } from 'AppsActions/immo-app/index'
import Image from './Image'

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
      return(
        <div>
          <div>
            <p>Retrieving data</p>
          </div>
        </div>
      )
    }

    const {
      title,
      owner,
      date,
      imgSrc,
      price,
      area
    } = propertyData

    return(
      <div id='show-property-container'>
        <div id='show-property-box'>
          <img src={close} id='close-property-img'
            onClick={hidePropertyPanel} />
          <div id='show-property-image'>
            <Image src={imgSrc} />
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