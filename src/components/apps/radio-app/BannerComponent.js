import React from 'react'
import { connect } from 'react-redux'
import s from './BannerComponent.module.scss'
import LogoPng from './logo.png'
import LangSelectComponent from './LangSelectComponent'
import InputAutoComplete from './InputAutoComplete'

const data = [
  'Musique 1',
  'Musique 2',
  'Radio 1',
  'Radio 2',
  'Test 1'
]

class BannerComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}>
        <div id={s.body}>
          <div id={s.left}>
            <a id={s.logo}><img src={LogoPng} id={s.logoPng} /></a>
            <a className={s.link}>LISTEN</a>
            <a className={s.link + ' ' + s.linkSelected}>PRODUCE</a>
            <a className={s.link}>APPS</a>
          </div>
          <div id={s.right}>
            <InputAutoComplete list={data} />
            <a className={s.link}>MY RADIOMANAGER</a>
            <LangSelectComponent />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(BannerComponent);