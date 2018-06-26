import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import s from './AboutComponent.module.scss'
import pattern from './pattern2.jpg'
import Github from './github.svg'
import LinkedIn from './linkedin.svg'
import DownloadCV from './download.svg'
import './aosAnimations.css'

const SkillComponent = ({children, value}) => (
  <div className={s.skillContainer} data-aos='fade-up' >
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
    const { tr, lang } = this.props

    return(
      <div id={s.container} style={{backgroundImage: `url(${pattern})`}}>
      <div id='about'></div>
        <h1 data-aos='fade-up'>
          {tr('about-title')}
          <div className={s.border} data-aos='fade-up'></div>
        </h1>
        <div id={s.leftAndRight}>
          <div id={s.left} data-aos='fade-right'>
            <h3>{tr('about-subtitle')}</h3>
            <p>{tr('about-text-1')}</p>
            <p>{tr('about-text-2')}</p>
            <p>{tr('about-text-3')}</p>
            <p style={{marginTop: '30px'}}><strong>{tr('about-text-4')}</strong></p>
            <div id={s.buttons}>
              <a href='https://github.com/saraband' target='_blank'><Github className={s.buttonSvg} /><span>Github</span></a>
              <a href='https://www.linkedin.com/in/yassine-hermellin/' target='_blank'><LinkedIn className={s.buttonSvg} />LinkedIn</a>
              <a href={`/CV_${lang}.pdf`} target='_blank'><DownloadCV className={s.buttonSvg} />Curriculum</a>
            </div>
          </div>
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