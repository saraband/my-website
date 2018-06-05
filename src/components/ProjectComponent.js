import React from 'react'
import { connect } from 'react-redux'
import s from './ProjectComponent.module.scss'
import projectsData from './ProjectsData'
import LeftArrow from './left-arrow.svg'
import RightArrow from './right-arrow.svg'
import test from './test.png'
import {
  setProject,
  showProject,
  hideProject
} from 'Actions/index'

const Project = ({src, onClick}) => (
  <div className={s.project} onClick={onClick} >
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
  }

  render() {
    const {
      nextProject,
      previousProject,
      currentProjectFade,
      showProject,
      hideProject,
      isProjectOpen
    } = this.props

    const {
      id,
      title,
      component
    } = this.props.currentProject

    return(
      <div id={s.container}>
        <div id={s.projectContainer} className={isProjectOpen ? s.showProject : s.hideProject} >
          <div id={s.projectLeft}>
            <h4 onClick={hideProject}>Back to projects</h4>
            <h3>Findimo</h3>
            <h5>Création d'interface pour une agence immobilière fictive</h5>
          </div>
          <div id={s.projectRight}>

          </div>
        </div>
        <h1>Some of my works</h1>
        <div id={s.projects} className={isProjectOpen ? s.hideProjects : s.showProjects} >
          <Project src={test} onClick={showProject} />
          <Project src={test}/>
          <Project src={test}/>
          <Project src={test}/>
          <Project src={test}/>
          <Project src={test}/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentProject: state.currentProject,
    currentProjectFade: state.currentProjectFade,
    isProjectOpen: state.isProjectOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showProject: (id) => dispatch(showProject(id)),
    hideProject: () => dispatch(hideProject())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ProjectComponent)
