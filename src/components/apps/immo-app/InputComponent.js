import React from 'react'
import { connect } from 'react-redux'
import { requestList } from 'AppsActions/immo-app/index'
import s from './InputComponent.module.scss'
import ImmoSelect from './ImmoSelect'
import AutoCompletePlace from './AutoCompletePlace'
import SearchSvg from './search.svg'
import AreaPng from './area.png'
import LocationPng from './location.png'
import BedPng from './bed.png'
import EuroPng from './euro.png'
import HouseSvg from './house.svg'

const formInitialState = {
  priceMin: '',
  priceMax: '',
  place: '',
  areaMin: '',
  areaMax: '',
  numRoomsMin: '',
  type: 'all',
  actionType: 'all'
}

class InputComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {...formInitialState}
  }

  handleChange = (event) => {
    const {
      name,
      value
    } = event.target

    switch(name) {
      case 'areaMin':
      case 'numRoomsMin':
      case 'priceMin':
      case 'priceMax':
        if(isNaN(value))
          return

      case 'type':
      case 'actionType':
      case 'place':
        this.setState({[name]: value})
        return

      default:
        return
    }
  }

  componentWillMount() {
    this.props.requestList({...this.state});
  }

  handleSelectPlace = (place) => {
    this.setState({place: place})
  }

  reinitializeForm = () => {
    this.setState({...formInitialState})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const {
      priceMin,
      priceMax,
      place,
      areaMin,
      numRoomsMin,
      type,
      actionType
    } = this.state

    this.props.requestList({...this.state});
  }

  render() {
    const {
      priceMin,
      priceMax,
      areaMin,
      numRoomsMin,
      type,
      actionType,
      place,
      isPlaceInputFocus
    } = this.state

    const { isRetrievingData } = this.props

    return(
      <div id={s.container}>
        <form onSubmit={this.handleSubmit} >
          <ImmoSelect
            onChange={this.handleChange}
            name='actionType'
            value={actionType}
            >
            <p value='all'>Rent & buy</p>
            <p value='buy'>Buy</p>
            <p value='rent'>Rent</p>
          </ImmoSelect>
          <ImmoSelect
            onChange={this.handleChange}
            name='type'
            value={type}
            renderIcon={() => <HouseSvg style={{width: '20px', paddingRight: '10px'}}/>}
            >
            <p value='all'>All type of goods</p>
            <p value='house'>Houses</p>
            <p value='appartment'>Appartments</p>
          </ImmoSelect>
          <br />
          <br />
          <div id={s.placeInput}>
            <input type='search' placeholder='Location, city'
              name='place' onChange={this.handleChange}
              value={place}
              autoComplete='off'
              onFocus={() => setTimeout(() => this.setState({isPlaceInputFocus: true}), 100)}
              onBlur={() => setTimeout(() => this.setState({isPlaceInputFocus: false}), 100)}
              style={{backgroundImage: `url(${LocationPng})`}}
              />
            {isPlaceInputFocus ? <AutoCompletePlace filter={place} onSelect={this.handleSelectPlace}/> : null}
          </div>
          <br />
          <div className={s.flexRow}>
            <input type='text' placeholder='Price (Min)'
              name='priceMin' onChange={this.handleChange} 
              value={priceMin}
              style={{backgroundImage: `url(${EuroPng})`}}
              />
            <p>&nbsp;&nbsp;à&nbsp;&nbsp;</p>
            <input type='text' placeholder='Price (Max)'
              name='priceMax' onChange={this.handleChange} 
              value={priceMax}
              style={{backgroundImage: `url(${EuroPng})`}}
              />
          </div>
          <input type='text' placeholder='Area (Min. in m²)'
            name='areaMin' onChange={this.handleChange} 
            value={areaMin}
            style={{backgroundImage: `url(${AreaPng})`}}
            />
            <br />
          <input type='text' placeholder='Number of room (Min)'
            name='numRoomsMin' onChange={this.handleChange} 
            value={numRoomsMin}
            style={{backgroundImage: `url(${BedPng})`}}
            />
          <div id={s.searchButton}>
            <a onClick={this.reinitializeForm}>Reinitialize form</a>
            <button disabled={isRetrievingData} ><SearchSvg id={s.searchSvg} /><p>Search</p></button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isRetrievingData: state.immoApp.isRetrievingData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestList: (data) => dispatch(requestList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)