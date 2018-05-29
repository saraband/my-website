import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import './PresentationComponent.scss'
import InlineSvg from './InlineSvg'
import logo from './logo.svg'
import reduxLogo from './reduxLogo.svg'
import reactLogo from './reactLogo.svg'
import htmlLogo from './htmlLogo.svg'
import cssLogo from './cssLogo.svg'
import nodeLogo from './nodeLogo.svg'
import graph from './graph.svg'
import ToolTip from './ToolTip'
import {
  setLang
} from 'Actions/index'

class PresentationComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      tr,
      setLang,
      lang
    } = this.props

    return(
      <div id='presentation-container'>
        <div id='presentation-header'>
          <InlineSvg src={logo} id='logo' className='fadeIn' />
          <div id='presentation-lang-container'>
            <div className={'presentation-lang-item' +
              (lang === 'en' ? ' selectedLang' : '')}
              onClick={() => setLang('en')}>EN</div>
            <div className={'presentation-lang-item' +
              (lang === 'fr' ? ' selectedLang' : '')}
              onClick={() => setLang('fr')}>FR</div>
            <div className={'presentation-lang-item' +
              (lang === 'es' ? ' selectedLang' : '')}
              onClick={() => setLang('es')}>ES</div>
          </div>
        </div>
        <div id='presentation-body'>
          <div id='presentation-title'>
            <h1>{tr('presentation-title')}</h1>
            <h2>{tr('presentation-subtitle')}</h2>
          </div>
          <div id='presentation-projects'>
            <div id='presentation-logos-container'>
              <ToolTip text='CSS3'>
                <InlineSvg src={cssLogo} className='presentation-logo-item' />
              </ToolTip>
              <ToolTip text='Redux'>
                <InlineSvg src={reduxLogo} className='presentation-logo-item' />
              </ToolTip>
              <ToolTip text='React'>
                <InlineSvg src={reactLogo} className='presentation-logo-item' />
              </ToolTip>
              <ToolTip text='Node'>
                <InlineSvg src={nodeLogo} className='presentation-logo-item' />
              </ToolTip>
              <ToolTip text='HTML5'>
                <InlineSvg src={htmlLogo} className='presentation-logo-item' />
              </ToolTip>
            </div>
            <InlineSvg src={graph} id='graph' />
            <button>Projects</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tr: getTrFn(state.lang),
    lang: state.lang
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (lang) => dispatch(setLang(lang))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (PresentationComponent)