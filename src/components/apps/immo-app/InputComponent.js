import React from 'react'
import { connect } from 'react-redux'
import { requestList } from 'AppsActions/immo-app/index'
import './InputComponent.scss'
import ImmoSelect from './ImmoSelect'

class InputComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      priceMin: '',
      priceMax: '',
      place: '',
      areaMin: '',
      numRoomsMin: '',
      type: 'all',
      actionType: 'buy'
    }
  }

  handleChange = (event) => {
    const {
      name,
      value
    } = event.target

    switch(name) {
      case 'place':
        this.setState({name: value})
        return

      case 'areaMin':
      case 'numRoomsMin':
      case 'priceMin':
      case 'priceMax':
        if(isNaN(value))
          return

        this.setState({[name]: value})
        return

      default:
        return
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const {
      priceMin,
      priceMax,
      type
    } = this.state

    console.log({
      price: {to: priceTo, from: priceFrom},
      type
    })

    this.props.requestList({to: parseInt(priceTo), from: parseInt(priceFrom)}, type);
  }

  render() {
    const {
      priceMin,
      priceMax,
      areaMin,
      numRoomsMin,
      type
    } = this.state

    const { isRetrievingData } = this.props

    return(
      <div id='immo-app-input'>
        <form onSubmit={this.handleSubmit} >
          <ImmoSelect>
            <p value='all'>Achat</p>
            <p value='houses'>Location</p>
          </ImmoSelect>
          <ImmoSelect>
            <p value='all'>Tout types de bien</p>
            <p value='houses'>Maison</p>
            <p value='appartment'>Appartement</p>
          </ImmoSelect>
          <br />
          <br />
          <input type='text' placeholder='Place, city, ZIP code' />
          <br />
          <div className='flex-row'>
            <input type='text' placeholder='Price (Min)'
              name='priceMin' onChange={this.handleChange} 
              value={priceMin} />
            <p>&nbsp;&nbsp;à&nbsp;&nbsp;</p>
            <input type='text' placeholder='Price (Max)'
              name='priceMax' onChange={this.handleChange} 
              value={priceMax} />
          </div>
          <input type='text' placeholder='Area (Min)'
            name='areaMin' onChange={this.handleChange} 
            value={areaMin} />
            <br />
          <input type='text' placeholder='Number of room (Min)'
            name='numRoomsMin' onChange={this.handleChange} 
            value={numRoomsMin} />
          <button disabled={isRetrievingData} >Search</button>
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
    requestList: (price, type) => dispatch(requestList(price, type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)