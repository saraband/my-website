import React from 'react'
import s from './index.module.scss'
import Banner from 'AppsComponents/delivery-app/Banner'
import BodyComponent from 'AppsComponents/delivery-app/BodyComponent'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <Banner />
        <BodyComponent />
      </div>
    )
  }
}