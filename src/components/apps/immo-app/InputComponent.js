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
import TagSvg from './tag.svg'

import { FlexRow } from 'Utils/styles'
import {
  StyledInputComponent,
  Form,
  Input,
  Button
} from './styles/InputComponentStyles'

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

    this.state = {
      ...formInitialState
    }
  }

  // Function called whenever a change occurs in the form
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

  reinitializeForm = () => this.setState({...formInitialState})
  handleSelectPlace = (place) => this.setState({place})

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
      <StyledInputComponent>
        <Form onSubmit={this.handleSubmit} >
          <ImmoSelect
            onChange={this.handleChange}
            name='actionType'
            value={actionType}
            renderIcon={() => <TagSvg style={{width: '20px', paddingRight: '10px'}}/>}
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
          <div id={s.placeInput}>
            <Input
              type='search'
              placeholder='Location, city'
              name='place'
              onChange={this.handleChange}
              value={place}
              autoComplete='off'
              onFocus={() => setTimeout(() => this.setState({isPlaceInputFocus: true}), 100)}
              onBlur={() => setTimeout(() => this.setState({isPlaceInputFocus: false}), 100)}
              style={{backgroundImage: `url(${LocationPng})`}}
              />
            {isPlaceInputFocus ? <AutoCompletePlace filter={place} onSelect={this.handleSelectPlace}/> : null}
          </div>
          <div className={s.flexRow}>
            <Input
              type='text'
              style={{fontSize: '3em'}}
              placeholder='Price (Min)'
              name='priceMin' onChange={this.handleChange} 
              value={priceMin}
              style={{backgroundImage: `url(${EuroPng})`}}
              autoComplete='off'
              />
            <p>&nbsp;&nbsp;à&nbsp;&nbsp;</p>
            <Input
              type='text'
              placeholder='Price (Max)'
              name='priceMax' onChange={this.handleChange} 
              value={priceMax}
              style={{backgroundImage: `url(${EuroPng})`}}
              autoComplete='off'
              />
          </div>
          <Input
            type='text'
            placeholder='Area (Min. in m²)'
            name='areaMin'
            onChange={this.handleChange} 
            value={areaMin}
            style={{backgroundImage: `url(${AreaPng})`}}
            autoComplete='off'
            />
          <Input
            type='text'
            placeholder='Number of room (Min)'
            name='numRoomsMin' onChange={this.handleChange} 
            value={numRoomsMin}
            style={{backgroundImage: `url(${BedPng})`}}
            autoComplete='off'
            />
          <div id={s.searchButton}>
            <a onClick={this.reinitializeForm}>Reinitialize form</a>
            <Button disabled={isRetrievingData} ><SearchSvg id={s.searchSvg} /><p>Search</p></Button>
          </div>
        </Form>
      </StyledInputComponent>
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