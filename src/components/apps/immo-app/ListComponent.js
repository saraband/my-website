import React from 'react';
import { connect } from 'react-redux';
import { requestList } from 'AppsActions/immo-app/index'
import Image from './Image'
import ListItem from './ListItem'
import ImmoSelect from './ImmoSelect'
import s from './ListComponent.module.scss'

class ListComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      isRetrievingData,
      list,
      lastCitySearched,
      listFilter,
      setListFilter
    } = this.props

    return(
      <div id={s.container}>
        <div id={s.topContainer} style={{visibility: isRetrievingData ? 'hidden' : 'visible'}}>
          <h3>{list.length} result{list.length === 1 ? null : 's'} found
            {lastCitySearched !== '' ? ` in ${lastCitySearched}` : null}.</h3>
          <ImmoSelect value={listFilter} style={{width: '250px', marginBottom: 0, marginRight: '100px'}}
            name='listFilter' onChange={(e) => setListFilter(e.target.value)}>
            <p value='no_sort'>Don't sort</p>
            <p value='price'>Sort by Price</p>
            <p value='price_desc'>Sort by Price (Desc)</p>
            <p value='area'>Sort by area</p>
            <p value='area_desc'>Sort by area (Desc)</p>
          </ImmoSelect>
        </div>
        <div id={s.list} style={{opacity: isRetrievingData ? 0.5 : 1}}>
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
    lastCitySearched: state.immoApp.lastCitySearched,
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