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
    const step = this.state.checkoutStep
    const {
      name
    } = this.props.restaurantData

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
                <li
                  className={step === 'recap' ? s.selected : null}
                  onClick={() => this.goToStep('recap')}
                  >
                    Recapitulatif
                  </li>
              </ul>
            </div>
            {this.renderStep()}
          </div>
          <div id={s.right}>
            Recapitulatif
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
    backToHome: () => dispatch({type: CHANGE_PAGE, page: 'restaurants_list_page'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent)