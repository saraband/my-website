import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import './PresentationComponent.scss'
import InlineSvg from './InlineSvg'
import Logo from './logo.svg'
import ReduxLogo from './reduxLogo.svg'
import ReactLogo from './reactLogo.svg'
import HtmlLogo from './htmlLogo.svg'
import CssLogo from './cssLogo.svg'
import NodeLogo from './nodeLogo.svg'
import Graph from './graph.svg'
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
          <Logo id='logo' className='fadeIn' />
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
                <CssLogo className='presentation-logo-item' />
              </ToolTip>
              <ToolTip text='Redux'>
                <ReduxLogo className='presentation-logo-item' />
              </ToolTip>
              <ToolTip text='React'>
                <ReactLogo className='presentation-logo-item' />
              </ToolTip>
              <ToolTip text='Node'>
                <NodeLogo className='presentation-logo-item' />
              </ToolTip>
              <ToolTip text='HTML5'>
                <HtmlLogo className='presentation-logo-item' />
              </ToolTip>
            </div>
            <Graph id='graph' />
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