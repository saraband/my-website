import React from 'react'
import { connect } from 'react-redux'
import s from './CheckoutComponent.module.scss'
import { CHANGE_PAGE } from 'AppsActions/delivery-app/index'

class CheckoutComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      /*
      ** Steps:
      **  info | card_info | recap | finished
      */
      checkoutStep: 'info'
    }
  }

  renderStep = () => {
    switch(this.state.checkoutStep) {
      case 'info':
        return(
          <form onSubmit={e => e.preventDefault}>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Surname' />
            <input type='text' placeholder='Telephone' />
            <button onClick={() => this.setState({checkoutStep: 'card_info'})}>Next step</button>
          </form>
        )

      case 'card_info':
        return(
          <form onSubmit={e => e.preventDefault}>
            <input type='text' placeholder='CREDIT CARD NUMBER' />
            <input type='text' placeholder='CVC' />
            <input type='text' placeholder='EXPIRATION DATE' />
            <button onClick={() => this.setState({checkoutStep: 'recap'})}>Recapitulatif</button>
          </form>
        )

      case 'recap':
        return(
          <p>
            Recapitulatif !
            <button onClick={() => this.setState({checkoutStep: 'finished'})}>Proceed to payment</button>
          </p>
        )
      case 'finished':
        return(
          <p>
            PAYMENT DONE
            <button onClick={this.props.backToHome}>HOME</button>
          </p>
        )
      default:
        return <h1>Error</h1>
    }
  }

  render() {
    const { backToRestaurant } = this.props
    const {
      name
    } = this.props.restaurantData

    return(
      <div id={s.container}>
        <h2 onClick={backToRestaurant}>Back to restaurant {name}</h2>
        {this.renderStep()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.deliveryApp.restaurantData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    backToRestaurant: () => dispatch({type: CHANGE_PAGE, page: 'restaurant_data_page'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent)