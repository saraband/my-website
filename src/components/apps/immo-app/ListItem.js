import React from 'react'
import { connect } from 'react-redux'
import { timeSince, prettyPrice } from 'Utils/index'
import Image from './Image'
import s from './ListItem.module.scss'
import {
  requestPropertyData,
  SHOW_PROPERTY_PANEL
} from 'AppsActions/immo-app/index'
import LocationSvg from './location.svg'
import DateSvg from './date.svg'
import LoadingSvg from './loading.svg'

const shortDescription = (str) => str.length < 100 ? str : `${str.substr(0, 95)}...`

class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const {
      id,
      showPropertyPanel,
      requestPropertyData
    } = this.props

    requestPropertyData(id)
  }

  render() {
    const {
      id,
      pictureUrlSmall,
      title,
      description,
      type,
      actionType,
      price,
      area,
      numRooms,
      place,
      date,
      isRetrievingPropertyData
    } = this.props

    return(
      <div onClick={this.handleClick} className={s.container}>
        {isRetrievingPropertyData !== -1 ?
          (id === isRetrievingPropertyData ? <div className={s.overlay}><LoadingSvg className={s.loading} /></div>
            : null)
          : null}
        {Date.now() / 1000 - date < 864000 ? <p className={s.newBanner}>New !</p> : null}
        <div className={s.imgContainer} >
          <Image src={pictureUrlSmall} alt={title} />
        </div>
        <div className={s.description}>
          <h3>{title}</h3>
          <h5><span>{prettyPrice(price)} €</span><span>{area} m²</span></h5>
          <p>{shortDescription(description)}</p>
          <p>
            <span className={s.vAlign}><LocationSvg className={s.locationSvg} />{place}</span>
            <span className={s.vAlign}><DateSvg className={s.locationSvg} />{timeSince(date*1000)}</span>
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isRetrievingPropertyData: state.immoApp.isRetrievingPropertyData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestPropertyData: (id) => dispatch(requestPropertyData(id)),
    showPropertyPanel: () => dispatch({type: SHOW_PROPERTY_PANEL})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ListItem)