import React from 'react'
import { connect } from 'react-redux'
import { requestList } from 'AppsActions/immo-app/index'
import s from './InputComponent.module.scss'
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
      actionType: 'all'
    }
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
      actionType
    } = this.state

    const { isRetrievingData } = this.props

    return(
      <div id={s.container}>
        <form onSubmit={this.handleSubmit} >
          <ImmoSelect onChange={this.handleChange}
            name='actionType' value={actionType}>
            <p value='all'>Achat & location</p>
            <p value='buy'>Achat</p>
            <p value='rent'>Location</p>
          </ImmoSelect>
          <ImmoSelect onChange={this.handleChange}
            name='type' value={type}>
            <p value='all'>Tout types de bien</p>
            <p value='houses'>Maison</p>
            <p value='appartment'>Appartement</p>
          </ImmoSelect>
          <br />
          <br />
          <input type='text' placeholder='Place, city, ZIP code'
            name='place' onChange={this.handleChange} />
          <br />
          <div className={s.flexRow}>
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
    requestList: (data) => dispatch(requestList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)