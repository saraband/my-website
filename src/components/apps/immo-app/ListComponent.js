import React from 'react';
import { connect } from 'react-redux';
import { requestList } from 'AppsActions/immo-app/index'
import Image from './Image'
import ListItem from './ListItem'
import ImmoSelect from './ImmoSelect'
import SortSvg from './sort.svg'
import LoadingSvg from './loading.svg'
import s from './ListComponent.module.scss'
import LoadingIcon from './LoadingIcon'
import Link from 'gatsby-link'

import { getRandomInt } from 'Utils/index'

class ListComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  // Renders tags elements from the last searched data
  renderTags = (data) => {
    if(data.type === undefined)
      return null

    let tags = []

    if(data.place !== '') tags.push(data.place)
    if(data.numRoomsMin !== '') tags.push(`${data.numRoomsMin} rooms min.`)
    if(data.priceMin !== '') tags.push(`${data.priceMin} € min.`)
    if(data.priceMax !== '') tags.push(`${data.priceMax} € max.`)
    if(data.areaMin !== '') tags.push(`${data.areaMin} m² min.`)
    if(data.areaMax !== '') tags.push(`${data.areaMax} m² max.`)
    if(data.type !== 'all') tags.push(data.type.slice(0, 1).toUpperCase() + data.type.slice(1))
    if(data.actionType !== 'all') tags.push(data.actionType.slice(0, 1).toUpperCase() + data.actionType.slice(1))
      
    return tags.map((t, i) => <p key={i} className={s.tag}>{t}</p>)
  }

  render() {
    const {
      isRetrievingData,
      list,
      lastSearchData,
      listFilter,
      setListFilter
    } = this.props

    return(
      <div id={s.container}>
        <div id={s.topContainer} style={{visibility: isRetrievingData || list.length === 0 ? 'hidden' : 'visible'}}>
          <div id={s.searchTags}>
            <h3>{list.length} result{list.length === 1 ? null : 's'} found</h3>
            {this.renderTags(lastSearchData)}
          </div>
          <ImmoSelect
            value={listFilter}
            style={{width: '250px', marginBottom: 0, marginRight: '100px'}}
            name='listFilter' onChange={(e) => setListFilter(e.target.value)}
            renderIcon={() => <SortSvg style={{width: '20px', paddingRight: '15px'}}/>}
            >
            <p value='date'>Sort by date</p>
            <p value='price'>Sort by Price</p>
            <p value='price_desc'>Sort by Price (Desc)</p>
            <p value='area'>Sort by area</p>
            <p value='area_desc'>Sort by area (Desc)</p>
          </ImmoSelect>
        </div>
        <div id={s.list}>
          {isRetrievingData ? <div id={s.listLoadingOverlay}><LoadingIcon id={s.loadingIcon} /></div> : null}
          {list.map(item => <ListItem key={item.id} {...item} />)}
        </div>
      </div>
    )
  }
}

// Returns a sorted copy of the list of properties
const getSortedList = (list, filter) => {
  switch(filter) {
    case 'date':
      return [...list].sort((a, b) => b.date - a.date)
    case 'price':
      return [...list].sort((a, b) => a.price - b.price)
    case 'price_desc':
      return [...list].sort((a, b) => b.price - a.price)
    case 'area':
      return [...list].sort((a, b) => a.area - b.area)
    case 'area_desc':
      return [...list].sort((a, b) => b.area - a.area)
    default:
      return list
  }
}

const mapStateToProps = state => {
  return {
    isRetrievingData: state.immoApp.isRetrievingData,
    list: getSortedList(state.immoApp.list, state.immoApp.listFilter),
    lastSearchData: state.immoApp.lastSearchData,
    listFilter: state.immoApp.listFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setListFilter: (filter) => dispatch({type: 'SET_LIST_FILTER', filter})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ListComponent)