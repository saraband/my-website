import React from 'react'
import { connect } from 'react-redux'
import s from './SearchComponent.module.scss'
import DeliSelect from './DeliSelect'
import {
  changeSearchData,
  toggleTag,
  requestRestaurantsList
} from 'AppsActions/delivery-app/index'

class SearchComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  requestListTest = () => console.log('Requesting data...')

  requestListFromProps = () => {
    const {
      searchData,
      rawTags,
      requestRestaurantsList
    } = this.props

    requestRestaurantsList({
      search: searchData.search,
      location: searchData.location,
      tags: rawTags
    })
  }

  componentWillMount() {
    this.requestListFromProps()
  }

  handleChange = (e, timeout = 1000) => {
    this.props.changeSearchData(e.target.name, e.target.value)

    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.requestListFromProps, timeout)
  }

  handleToggleTag = (tag) => {
    this.props.toggleTag(tag)
    
  }

  componentDidUpdate(prevProps) {
    if(this.props.rawTags !== prevProps.rawTags) {
      this.requestListFromProps()
    }
  }

  renderTags = () => {
    const {
      searchData,
      tags,
      rawTags,
      toggleTag,
      changeSearchData,
      numResults
    } = this.props

    return(
      <div id={s.tags}>
        <h4>{numResults} found{rawTags}</h4>
        {searchData.search.length > 0 ?
          <p className={s.tag}>
            Search: "{searchData.search}"
            <strong onClick={() => this.handleChange({target: {name: 'search', value: ''}}, 0)}>X</strong>
          </p>
          : null}
        {searchData.location.length > 0 ?
          <p className={s.tag}>
            Location: "{searchData.location}"
            <strong onClick={() => this.handleChange({target: {name: 'location', value: ''}}, 0)}>X</strong>
          </p>
          : null}
        {tags.map((t, i) => t.selected ?
          <p className={s.tag} key={i}>
            {t.value}
            <strong onClick={() => this.handleToggleTag(t.value)}>X</strong>
          </p>
          : null)}          
      </div>
    )
  }

  render() {
    const {
      search,
      location
    } = this.props.searchData

    const {
      changeSearchData,
      tags,
      toggleTag
    } = this.props

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
            name='location'
            onChange={this.handleChange}
            />
          <DeliSelect
            value='Tags'
            onChange={this.handleToggleTag}
            tags={tags}
            />
        </form>
        {this.renderTags()}
      </div>
    )
  }
}

const getTagsPossibleFromList = (list) => {
  let tags = []

  for(let r of list) {
    for(let t of r.tags) {
      if(tags.length === 0
      || tags.find(e => e === t) === undefined) {
        tags.push(t)
      }
    }
  }

  return tags
}

const getSimpleTagList = (tags, selectedTags) => tags.map(t => ({
  value: t,
  selected: selectedTags.find(st => st === t) !== undefined
}))

const mapStateToProps = (state) => {
  return {
    searchData: state.deliveryApp.searchData,
    tags: getSimpleTagList(getTagsPossibleFromList(state.deliveryApp.restaurantsList), state.deliveryApp.tags),
    numResults: state.deliveryApp.restaurantsList.length,
    rawTags: state.deliveryApp.tags
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchData: (key, value) => dispatch(changeSearchData(key, value)),
    toggleTag: (tag) => dispatch(toggleTag(tag)),
    requestRestaurantsList: (searchData, tags) => dispatch(requestRestaurantsList(searchData, tags))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)