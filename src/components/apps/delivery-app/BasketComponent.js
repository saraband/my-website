import React from 'react'
import { connect } from 'react-redux'
import s from './BasketComponent.module.scss'

class BasketComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { test } = this.props.basket

    return(
      <div id={s.container}>
        BasketComponent {test}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.deliveryApp.basket
  }
}

export default connect(mapStateToProps)(BasketComponent)