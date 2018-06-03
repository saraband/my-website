import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import s from './AboutComponent.module.scss'

class AboutComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <h1>Hi, my name is Yassine Hermellin</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis et est sit amet hendrerit. Pellentesque non mauris sit amet ex dignissim interdum. Donec porta risus dolor, at hendrerit felis tempor non. Duis at accumsan arcu. Maecenas eu suscipit augue. Praesent ut ipsum accumsan, consequat nisl et, dapibus lorem. Vestibulum scelerisque diam nec velit faucibus placerat. Nam nibh neque, mattis eget volutpat a, fermentum eget nisi.
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tr: getTrFn(state.lang)
  }
}

export default connect(mapStateToProps)(AboutComponent)