import React from 'react'
import { connect } from 'react-redux'
import s from './ContactComponent.module.scss'

class ContactComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis et est sit amet hendrerit. Pellentesque non mauris sit amet ex dignissim interdum. Donec porta risus dolor, at hendrerit felis tempor non. Duis at accumsan arcu. Maecenas eu suscipit augue. Praesent ut ipsum accumsan, consequat nisl et, dapibus lorem. Vestibulum scelerisque diam nec velit faucibus placerat. Nam nibh neque, mattis eget volutpat a, fermentum eget nisi. Phasellus commodo eros eu metus dignissim, in pulvinar elit dapibus. Nunc vel nisi orci. Nunc non eleifend leo. Cras justo sapien, imperdiet nec ligula eget, consequat tristique ipsum. Phasellus aliquet purus non neque gravida consectetur. Nullam quis felis eget elit dignissim consequat. </p>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ContactComponent)
