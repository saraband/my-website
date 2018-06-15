import React from 'react'
import s from './index.module.scss'
import Banner from 'AppsComponents/delivery-app/Banner'
import SearchComponent from 'AppsComponents/delivery-app/SearchComponent'
import BasketComponent from 'AppsComponents/delivery-app/BasketComponent'
import BodyComponent from 'AppsComponents/delivery-app/BodyComponent'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <Banner />
        <SearchComponent />
        <div className={s.flexRow}>
          <BodyComponent />
          <BasketComponent />
        </div>
      </div>
    )
  }
}