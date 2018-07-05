import React from 'react'
import { connect } from 'react-redux'
import s from './AboutComponent.module.scss'
import './aosAnimations.css'

import getTrFn from './Translation'

import patternPng from './pattern.png'
import GithubSvg from './github.svg'
import LinkedInSvg from './linkedin.svg'
import DownloadCVSvg from './download.svg'
import styled, { keyframes } from 'styled-components'
import { FlexRow, FlexCol } from 'Utils/styles'
import Colors from './Colors'

/*
** Skill bars component
*/

const StyledSkillComponent = FlexRow.extend`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;
`

const SkillName = FlexRow.withComponent('p').extend`
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  width: 200px;
  font-size: 18px;
  background-color: white;
  color: ${Colors.RED};
`

const SkillBar = FlexRow.extend`
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background-color: tomato;
`

const SkillBarFill = styled.div`
  background-color: bisque;
  height: 100%;
`

const SkillValue = styled.p`
  flex-grow: 0;
  background-color: unset;
  color: white;
  float: right;
  padding: 10px;
  font-size: 15px;
`

const SkillComponent = ({children, value}) => (
  <StyledSkillComponent data-aos='fade-up'>
    <SkillName>{children}</SkillName>
    <SkillBar>
      <div style={{width: `${value}%`, height: '100%'}}>
        <SkillBarFill data-aos='widthUp' data-aos-delay={200} />
      </div>
      <SkillValue>{value}%</SkillValue>
    </SkillBar>
  </StyledSkillComponent>
)

/*
**  ABOUT COMPONENT
*/
const StyledAboutComponent = FlexCol.extend`
  justify-content: center;
  align-items: center;
  background-color: ${Colors.RED};
  background-image: url(${patternPng});
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  color: white;
  padding-bottom: 50px;
  width: 100vw;
  position: relative;
`

const StyledSectionTitle = FlexCol.withComponent('h1').extend`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 50px;
  margin-top: 35px;
  margin-bottom: 35px;
`

const SectionTitleBorder = styled.div`
  animation: widthIn 0.2s forwards ease-in-out;
  height: 5px;
  background-color: white;
  margin-top: 15px;
  width: 50%;
`

const SectionTitle = ({children}) => (
  <StyledSectionTitle>
    {children}
    <SectionTitleBorder />
  </StyledSectionTitle>
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
      <StyledAboutComponent>
      <div id='about'></div>
        <SectionTitle>{tr('about-title')}</SectionTitle>
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
      </StyledAboutComponent>
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