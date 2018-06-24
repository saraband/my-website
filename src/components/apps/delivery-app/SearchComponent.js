import React from 'react'
import { connect } from 'react-redux'
import s from './SearchComponent.module.scss'
import DeliSelect from './DeliSelect'
import ImmoSelect from './ImmoSelect'
import {
  changeSearchData,
  toggleTag,
  requestRestaurantsList,
  changeRestaurantsSortFilter
} from 'AppsActions/delivery-app/index'
import LocationPng from './location.png'
import SearchPng from './search.png'
import SearchWhiteSvg from './search-white.svg'
import TagSvg from './tag-orange.svg'
import CloseSvg from './close.svg'
import AutoComplete from './AutoComplete'

class SearchComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sort: 'sort_rating',
      shouldReloadList: false,
      showLocationAC: false,
    }
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
    const { changeSearchData } = this.props

    changeSearchData(e.target.name, e.target.value)

    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.requestListFromProps, timeout)
  }

  handleToggleTag = (tag, timeout = 1000) => {
    const { toggleTag } = this.props

    toggleTag(tag)

    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.requestListFromProps, timeout)
  }

  // When tags change, directly request list
  /*componentDidUpdate(prevProps) {
    if(this.props.rawTags !== prevProps.rawTags) {
      this.requestListFromProps()
    }
  }*/

  renderTags = () => {
    const {
      searchData,
      tags,
      rawTags,
      toggleTag,
      changeSearchData,
      numResults,
      sortFilter,
      setSortFilter
    } = this.props
    const { sort } = this.state

    return(
      <div id={s.tags}>
        <h4>{numResults} restaurant{numResults !== 1 ? 's' : null} found</h4>
        <div id={s.tagsList}>
          {searchData.search.length > 0 ?
            <p className={s.tag}>
              <span>Search: "{searchData.search}"</span>
              <CloseSvg className={s.closeSvg} onClick={() => this.handleChange({target: {name: 'search', value: ''}}, 0)} />
            </p>
            : null}
          {searchData.location.length > 0 ?
            <p className={s.tag}>
              <span>Location: "{searchData.location}"</span>
              <CloseSvg className={s.closeSvg} onClick={() => this.handleChange({target: {name: 'location', value: ''}}, 0)} />
            </p>
            : null}
          {tags.map((t, i) => t.selected ?
            <p className={s.tag} key={i}>
              <span>{t.value}</span>
              <CloseSvg className={s.closeSvg} onClick={() => this.handleToggleTag(t.value)} />
            </p>
            : null)}
        </div>
        <ImmoSelect value={sortFilter} onChange={e => setSortFilter(e.target.value)}>
          <p value='sort_rating'>Sort by rating</p>
          <p value='sort_price'>Sort by price</p>
        </ImmoSelect>
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
      toggleTag,
      isRetrievingRestaurantsList,
    } = this.props

    const {
      showLocationAC,
      showSearchAC
    } = this.state

    const cities = [
      'Barcelona',
      'Madrid',
      'Bilbao',
      'Cadiz',
      'Tanger',
      'Malaga',
      'Burgos'
    ]

    return(
      <div id={s.container}>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='search'
            placeholder='Search'
            value={search}
            name='search'
            onChange={this.handleChange}
            style={{
              backgroundImage: `url(${SearchPng})`
            }} />
          <div className={s.inputBox}>
            <input
              type='search'
              placeholder='Place, City, ZIP code'
              value={location}
              name='location'
              onChange={this.handleChange}
              onFocus={() => this.setState({showLocationAC: true})}
              onBlur={() => setTimeout(() => this.setState({showLocationAC: false}), 100)}
              style={{
                backgroundImage: `url(${LocationPng})`
              }} />
            {showLocationAC && <AutoComplete
              list={cities}
              filter={location}
              onSelect={(loc) => this.handleChange({target: {name: 'location', value: loc}})}
              /> }
          </div>
          <DeliSelect
            value='Tags'
            onChange={this.handleToggleTag}
            tags={tags}
            renderIcon={() => <TagSvg id={s.tagSvg} />}
            />
            <button
              disabled={isRetrievingRestaurantsList}
              onClick={this.requestListFromProps}>
                <SearchWhiteSvg id={s.searchSvg} />
                Search
            </button>
        </form>
        {this.renderTags()}
      </div>
    )
  }
}

const getSimpleTagList = (tags, selectedTags) => tags.map(t => ({
  value: t.value,
  number: t.number,
  selected: selectedTags.find(st => st === t.value) !== undefined
}))

const mapStateToProps = (state) => {
  return {
    searchData: state.deliveryApp.searchData,
    tags: getSimpleTagList(state.deliveryApp.tagsPossibles, state.deliveryApp.tags),
    numResults: state.deliveryApp.restaurantsList.length,
    rawTags: state.deliveryApp.tags,
    isRetrievingRestaurantsList: state.deliveryApp.isRetrievingRestaurantsList,
    sortFilter: state.deliveryApp.restaurantsSortFilter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchData: (key, value) => dispatch(changeSearchData(key, value)),
    toggleTag: (tag) => dispatch(toggleTag(tag)),
    requestRestaurantsList: (searchData, tags) => dispatch(requestRestaurantsList(searchData, tags)),
    setSortFilter: (filter) => dispatch(changeRestaurantsSortFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)