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
      requestList,
      isRetrievingData,
      list
    } = this.props

    if(!list.length) {
      return (
        <div>
          <p>No results yet, time to hit the form !</p>
        </div>
      )
    }

    if(isRetrievingData) {
      return(
        <div>
          <p>Retrieving data from API...</p>
        </div>
      )
    }

    return(
      <div id={s.container}>
        <div id={s.topContainer}>
          <h3>{list.length} results found in Barcelona.</h3>
          <ImmoSelect value='no_sort' style={{width: '250px', marginBottom: 0, marginRight: '100px'}} >
            <p value='no_sort'>Don't sort</p>
            <p value='price'>Sort by Price</p>
            <p value='price_desc'>Sort by Price (Desc)</p>
            <p value='area'>Sort by area</p>
            <p value='area_desc'>Sort by area (Desc)</p>
          </ImmoSelect>
        </div>
        <div id={s.list}>
          {list.map(item => <ListItem key={item.id} {...item} />)}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.requestList({from: 0, to: 100000}, 'house')
  }
}

const mapStateToProps = state => {
  return {
    isRetrievingData: state.immoApp.isRetrievingData,
    list: state.immoApp.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestList: (price, type) => dispatch(requestList(price, type))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ListComponent)