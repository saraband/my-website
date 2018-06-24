import React from 'react'
import { connect } from 'react-redux'
import s from './CheckoutComponent.module.scss'
import { CHANGE_PAGE } from 'AppsActions/delivery-app/index'
import BasketComponent from './BasketComponent'

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

  cancelEvent = (event) => {
    if(event.stopPropagation)
      event.stopPropagation()
  }

  goToStep = (step) => this.setState({checkoutStep: step})

  renderStep = () => {
    switch(this.state.checkoutStep) {
      case 'info':
        return(
          <form onSubmit={e => e.preventDefault()}>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Surname' />
            <input type='text' placeholder='Telephone' />
            <button onClick={() => this.setState({checkoutStep: 'card_info'})}>Next step</button>
          </form>
        )

      case 'card_info':
        return(
          <form onSubmit={e => e.preventDefault()}>
            <input type='text' placeholder='Credit card number' />
            <input type='text' placeholder='CVC' />
            <input type='text' placeholder='Expiration date' />
            <button onClick={() => this.setState({checkoutStep: 'finished'})}>Proceed to payment</button>
          </form>
        )
      default:
        return <h1>Error</h1>
    }
  }

  render() {
    const { backToRestaurant } = this.props
    const step = this.state.checkoutStep
    const {
      name
    } = this.props.restaurantData

    if(step === 'finished')
      return(
        <div id={s.container} onClick={backToRestaurant}>
          <div id={s.box} onClick={this.cancelEvent} className={s.boxFinished}>
            <form onSubmit={e => e.preventDefault()}>
              <p>Payment finished !</p>
              <button>Home</button>
            </form>
          </div>
        </div>
      )

    return(
      <div id={s.container} onClick={backToRestaurant}>
        <div id={s.box} onClick={this.cancelEvent}>
          <div id={s.left}>
            <h3>Check out</h3>
            <div id={s.steps}>
              <ul>
                <li
                  className={step === 'info' ? s.selected : null}
                  onClick={() => this.goToStep('info')}
                  >
                    General informations
                  </li>
                <li
                  className={step === 'card_info' ? s.selected: null}
                  onClick={() => this.goToStep('card_info')}
                  >
                    Payment informations
                  </li>
              </ul>
            </div>
            {this.renderStep()}
          </div>
          <div id={s.right}>
            <BasketComponent showControls={false} width='250px' />
          </div>
        </div>
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
    backToRestaurant: () => dispatch({type: CHANGE_PAGE, page: 'restaurant_data_page'}),
    backToHome: () => {
      window.scroll(0, 0)
      dispatch({type: CHANGE_PAGE, page: 'restaurants_list_page'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent)