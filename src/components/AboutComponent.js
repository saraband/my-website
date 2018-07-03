import React from 'react'
import { connect } from 'react-redux'
import s from './AboutComponent.module.scss'
import './aosAnimations.css'

import getTrFn from './Translation'

import patternPng from './pattern.png'
import GithubSvg from './github.svg'
import LinkedInSvg from './linkedin.svg'
import DownloadCVSvg from './download.svg'

/*
** Skill bars component
*/
const SkillComponent = ({children, value}) => (
  <div className={s.skillContainer} data-aos='fade-up'>
    <p className={s.skillName}>{children}</p>
    <div className={s.skillBar} >
      <div style={{width: `${value}%`, height: '100%'}}>
        <div className={s.skillBarFill} data-aos='widthUp' data-aos-delay={200}></div>
      </div>
      <p>{value}%</p>
    </div>
  </div>
)

class AboutComponent extends React.Component {
  constructor(props) {
    super(props)

    this.skills = [
      {name: 'React', value: 85},
      {name: 'Redux', value: 80},
      {name: 'Node', value: 75},
      {name: 'HTML5', value: 90},
      {name: 'CSS3', value: 90},
      {name: 'Webpack', value: 60},
      {name: 'Photoshop', value: 85},
      {name: 'Illustrator', value: 85},
      {name: 'Premiere', value: 80},
      {name: 'Indesign', value: 60},
      {name: 'After Effects', value: 90}
    ]
  }

  render() {
    const {
      tr,
      lang
    } = this.props

    return(
      <div id={s.container} style={{backgroundImage: `url(${patternPng})`}}>
      <div id='about'></div>
        <h1 data-aos='fade-up'>
          {tr('about-title')}
          <div className={s.border} data-aos='fade-up'></div>
        </h1>
        <div id={s.leftAndRight}>
          <div id={s.left} data-aos='fade-right'>

            {/* About  text*/}
            <h3>{tr('about-subtitle')}</h3>
            <p>{tr('about-text-1')}</p>
            <p>{tr('about-text-2')}</p>
            <p>{tr('about-text-3')}</p>
            <p style={{marginTop: '30px'}}><strong>{tr('about-text-4')}</strong></p>

            {/* About links */}
            <div id={s.buttons}>
              <a href='https://github.com/saraband' target='_blank'>
                <GithubSvg className={s.buttonSvg} />
                <span>Github</span>
              </a>
              <a href='https://www.linkedin.com/in/yassine-hermellin/' target='_blank'>
                <LinkedInSvg className={s.buttonSvg} />
                <span>LinkedIn</span>
              </a>
              <a href={`/CV_${lang}.pdf`} target='_blank'>
                <DownloadCVSvg className={s.buttonSvg} />
                <span>Curriculum</span>
              </a>
            </div>

          </div>

          {/* Skills bars */}
          <div id={s.right}>
            {this.skills.map((sk, i) => <SkillComponent value={sk.value} key={i} >{sk.name}</SkillComponent>)}
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

export default connect(mapStateToProps)(AboutComponent)