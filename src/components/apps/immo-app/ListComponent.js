import React from 'react';
import { connect } from 'react-redux';
import { requestList } from 'AppsActions/immo-app/index'
import Image from './Image'
import ListItem from './ListItem'
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
        {list.map(item => <ListItem key={item.id} {...item} />)}
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