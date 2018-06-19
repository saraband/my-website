import React from 'react'
import { connect } from 'react-redux'
import s from './SearchComponent.module.scss'
import DeliSelect from './DeliSelect'
import {
  changeSearchData,
  toggleTag
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

  renderTags = () => {
    const {
      searchData,
      tags,
      toggleTag,
      changeSearchData
    } = this.props

    return(
      <div id={s.tags}>
        {searchData.search.length > 0 ?
          <p className={s.tag}>{searchData.search}<strong onClick={() => changeSearchData('search', '')}>X</strong></p>
          : null}
        {searchData.location.length > 0 ?
          <p className={s.tag}>{searchData.location}<strong onClick={() => changeSearchData('location', '')}>X</strong></p>
          : null}
        {tags.map(t => t.selected ? 
          <p className={s.tag}>{t.value}<strong onClick={() => toggleTag(t.value)}>X</strong></p>
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
            onChange={this.handleChange}
            />
          <DeliSelect
            value='Tags'
            onChange={toggleTag}
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
    tags: getSimpleTagList(getTagsPossibleFromList(state.deliveryApp.restaurantsList), state.deliveryApp.tags)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchData: (key, value) => dispatch(changeSearchData(key, value)),
    toggleTag: (tag) => dispatch(toggleTag(tag))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)