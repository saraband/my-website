import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import s from './AboutComponent.module.scss'
import leavesPattern from './leaves.png'

const SkillComponent = ({children, value}) => (
  <div className={s.skillContainer}>
    <p className={s.skillName}>{children}</p>
    <div className={s.skillBar} >
      <div className={s.skillBarFill} style={{width: `${value}%`}}></div>
      <p>{value}%</p>
    </div>
  </div>
)

class AboutComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id={s.container}
        style={{backgroundImage: `url(${leavesPattern})`}} >
        <h1>
          About
          <div className={s.border} data-aos='fade-up'></div>
        </h1>
        <div id={s.leftAndRight}>
          <div id={s.left}>
            <h3>Hi, my name is Yassine Hermellin</h3>
            <p>
              Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.<br /><br /> I'm quietly confident, naturally curious, and perpetually improving my chops.
            </p>
          </div>
          <div id={s.right}>
            <SkillComponent value={85} >React</SkillComponent>
            <SkillComponent value={80} >Redux</SkillComponent>
            <SkillComponent value={75} >Node</SkillComponent>
            <SkillComponent value={90} >HTML5</SkillComponent>
            <SkillComponent value={90} >CSS3</SkillComponent>
            <SkillComponent value={60} >Webpack</SkillComponent>
            <SkillComponent value={85} >Photoshop</SkillComponent>
            <SkillComponent value={85} >Illustrator</SkillComponent>
            <SkillComponent value={80} >Premiere</SkillComponent>
            <SkillComponent value={60} >Indesign</SkillComponent>
            <SkillComponent value={90} >After Effects</SkillComponent>
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