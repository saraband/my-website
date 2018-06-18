import React from 'react'
import { connect } from 'react-redux'
import s from './SearchComponent.module.scss'
import DeliSelect from './DeliSelect'
import {
  changeSearchData
} from 'AppsActions/delivery-app/index'

class SearchComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  requestListTest = () => console.log('Requesting data...')

  handleChange = (e) => {
    changeSearchData(e.target.name, e.target.value)

    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.requestListTest, 1000)
    console.log('changed data')
  }

  render() {
    const {
      search,
      location
    } = this.props.searchData
    const { changeSearchData } = this.props

    return(
      <div id={s.container}>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='search'
            placeholder='Search'
            value={search}
            name='search'
            onChange={this.handleChange}
            />
          <input
            type='search'
            placeholder='Place, City, ZIP code'
            value={location}
            onChange={this.handleChange}
            />
          <DeliSelect onChange={() => {}} >
            <p>Chinese</p>
            <p>Japanese</p>
            <p>Spanish</p>
            <p>French</p>
          </DeliSelect>
          <DeliSelect onChange={() => {}} >
            <option>Cheap</option>
            <option>Moderate</option>
            <option>Expensive</option>
          </DeliSelect>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchData: state.deliveryApp.searchData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchData: (key, value) => dispatch(changeSearchData(key, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)