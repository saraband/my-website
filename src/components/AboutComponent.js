import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import s from './AboutComponent.module.scss'
import pattern from './pattern.jpg'
import Github from './github.svg'
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
    return(
      <div id={s.container} >
        <h1 data-aos='fade-up'>
          About
          <div className={s.border} data-aos='fade-up'></div>
        </h1>
        <div id={s.leftAndRight}>
          <div id={s.left} data-aos='fade-right'>
            <h3>Hi, my name is Yassine Hermellin</h3>
            <p>
              Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.<br /><br /> I'm quietly confident, naturally curious, and perpetually improving my chops.
            </p>
            <button><Github id={s.github} />Check me on Github</button>
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
    tr: getTrFn(state.lang)
  }
}

export default connect(mapStateToProps)(AboutComponent)