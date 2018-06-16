import React from 'react';
import { connect } from 'react-redux';
import { requestList } from 'AppsActions/immo-app/index'
import Image from './Image'
import ListItem from './ListItem'
import ImmoSelect from './ImmoSelect'
import s from './ListComponent.module.scss'
import SortSvg from './sort.svg'
import PropertyItemPlaceHolder from './PropertyItemPlaceHolder'
import LoadingSvg from './loading.svg'

class ListComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  renderTags = (data) => {
    if(data.type === undefined) {
      console.log('undefined')
      return null
    }

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

    /*if(isRetrievingData) {
      return(
        <div id={s.container}>
          <div id={s.list}>
            <PropertyItemPlaceHolder />
            <PropertyItemPlaceHolder />
            <PropertyItemPlaceHolder />
            <PropertyItemPlaceHolder />
            <PropertyItemPlaceHolder />
          </div>
        </div>
      )
    }*/

    return(
      <div id={s.container}>
        <div id={s.topContainer} style={{visibility: isRetrievingData ? 'hidden' : 'visible'}}>
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
            <p value='no_sort'>Don't sort</p>
            <p value='price'>Sort by Price</p>
            <p value='price_desc'>Sort by Price (Desc)</p>
            <p value='area'>Sort by area</p>
            <p value='area_desc'>Sort by area (Desc)</p>
          </ImmoSelect>
        </div>
        <div id={s.list} style={{opacity: isRetrievingData ? 0.5 : 1}}>
          <LoadingSvg id={s.loadingList} style={{display: isRetrievingData ? 'block' : 'none'}}/>
          {list.map(item => <ListItem key={item.id} {...item} />)}
        </div>
      </div>
    )
  }
}

const getSortedList = (list, filter) => {
  if(filter === 'no_sort')
    return list

  console.log(filter)

  switch(filter) {
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