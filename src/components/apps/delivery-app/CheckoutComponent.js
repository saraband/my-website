import React from 'react'
import { connect } from 'react-redux'
import s from './CheckoutComponent.module.scss'
import { CHANGE_PAGE, CLEAR_BASKET } from 'AppsActions/delivery-app/index'
import BasketComponent from './BasketComponent'
import InfoSvg from './info2.svg'
import CardSvg from './card2.svg'
import TransactionDone from './transaction-done.svg'

class CheckoutComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      /*
      ** Steps:
      **  info | card_info | recap | finished
      */
      checkoutStep: 'info',
      name: 'John',
      surname: 'Doe',
      telephone: '555 365 199 471',
      ccnumber: '1562 1456 7897 4512 2012',
      cvc: '420',
      expirationDate: '08/22',
      isPaying: false,
    }
  }

  cancelEvent = (event) => {
    if(event.stopPropagation)
      event.stopPropagation()
  }

  goToStep = (step) => this.setState({checkoutStep: step})
  handleChange = (e) => this.setState({[e.target.name]: e.target.value})

  checkInfoStep = () => {
    const {
      name,
      surname,
      telephone
    } = this.state

    if(name.length >= 2 && !/^[a-zA-Z\s]*$/.test(name)) return false
    if(surname.length >= 2 && !/^[a-zA-Z\s]*$/.test(surname)) return false
    if(telephone.length > 5 && !/^[\d ]*$/.test(telephone)) return false

    return true
  }

  renderStep = () => {
    const {
      name,
      surname,
      telephone,
      ccnumber,
      cvc,
      expirationDate,
      isPaying
    } = this.state

    switch(this.state.checkoutStep) {
      case 'info':
        return(
          <form onSubmit={e => e.preventDefault()}>
            <input type='text' placeholder='Name' name='name' value={name} onChange={this.handleChange} />
            <input type='text' placeholder='Surname' name='surname' value={surname} onChange={this.handleChange} />
            <input type='text' placeholder='Telephone' name='telephone' value={telephone} onChange={this.handleChange} />
            <button onClick={() => this.setState({checkoutStep: 'card_info'})}
              disabled={!this.checkInfoStep()}>Next step</button>
          </form>
        )

      case 'card_info':
        return(
          <form onSubmit={e => e.preventDefault()}>
            <input type='text' placeholder='Credit card number' name='ccnumber' value={ccnumber} onChange={this.handleChange} />
            <input type='text' placeholder='CVC' name='cvc' value={cvc} onChange={this.handleChange} />
            <input type='text' placeholder='Expiration date' name='expirationDate' value={expirationDate} onChange={this.handleChange} />
            <button disabled={isPaying} onClick={() => {
              this.setState({isPaying: true}, () => setTimeout(() => this.setState({checkoutStep: 'finished'}), 1000))
            }}>{isPaying ? 'Processing...' : 'Proceed to payment'}</button>
          </form>
        )
      default:
        return <h1>Error</h1>
    }
  }

  render() {
    const {
      backToRestaurant,
      backToHome,
      clearBasket,
      restaurantId
    } = this.props
    const step = this.state.checkoutStep
    const {
      name
    } = this.props.restaurantData

    if(step === 'finished')
      return(
        <div id={s.container} onClick={backToRestaurant}>
          <div id={s.box} onClick={this.cancelEvent} className={s.boxFinished}>
            <form onSubmit={e => e.preventDefault()} className={s.formFinished}>
              <TransactionDone id={s.transactionDone} />
              <p>Payment finished ! Thanks for choosing Delicius.</p>
              <button onClick={() => {
                clearBasket(restaurantId)
                backToHome()
               }}>Home</button>
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
                    <InfoSvg id={s.infoSvg} />
                    General informations
                  </li>
                <li
                  className={step === 'card_info' ? s.selected: null}
                  onClick={this.checkInfoStep() ? () => this.goToStep('card_info') : null}
                  >
                    <CardSvg id={s.cardSvg} />
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
    restaurantData: state.deliveryApp.restaurantData,
    restaurantId: state.deliveryApp.restaurantData.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearBasket: (id) => dispatch({type: CLEAR_BASKET, basketId: id}),
    backToRestaurant: () => dispatch({type: CHANGE_PAGE, page: 'restaurant_data_page'}),
    backToHome: () => {
      window.scroll(0, 0)
      dispatch({type: CHANGE_PAGE, page: 'restaurants_list_page'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent)