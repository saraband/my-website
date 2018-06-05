import React from 'react'
import { connect } from 'react-redux'
import s from './ProjectComponent.module.scss'
import projectsData from './ProjectsData'
import LeftArrow from './left-arrow.svg'
import RightArrow from './right-arrow.svg'
import { getRandomInt } from 'Utils/index'
import test from './test.png'
import {
  setProject
} from 'Actions/index'

const Project = ({src, onClick, i}) => (
  <div className={s.project} onClick={onClick}
    data-aos='flip-up'
    data-aos-anchor-placement='top-bottom'
    data-aos-duration={1000}
    data-aos-delay={1000}
    >
    <div className={s.projectOverlay}>
      <h3>Findimo</h3>
      <h4>Design & Front-end development</h4>
    </div>
    <img src={src} />
  </div>
)

class ProjectComponent extends React.Component {
  constructor(props) {
    super(props)

    this.projects = [
      {pictureUrl: test},
      {pictureUrl: test},
      {pictureUrl: test},
      {pictureUrl: test},
      {pictureUrl: test},
      {pictureUrl: test}
    ]
  }

  render() {
    const {
      nextProject,
      previousProject,
      currentProjectFade
    } = this.props

    const {
      id,
      title,
      component
    } = this.props.currentProject

    return(
      <div id={s.container}>
        <h1 data-aos='fade-up'>
          Some of my work
          <div className={s.border} data-aos='fade-up'></div>
        </h1>
        <div id={s.projects} >
          {this.projects.map(({pictureUrl}, i) => <Project src={pictureUrl} key={i} i={i} />)}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentProject: state.currentProject,
    currentProjectFade: state.currentProjectFade
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ProjectComponent)
