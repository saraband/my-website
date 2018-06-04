import React from 'react'
import { connect } from 'react-redux'
import s from './ProjectComponent.module.scss'
import projectsData from './ProjectsData'
import LeftArrow from './left-arrow.svg'
import RightArrow from './right-arrow.svg'
import test from './test.png'
import {
  setProject
} from 'Actions/index'

const Project = ({src}) => (
  <div className={s.project}>
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
      currentProjectFade
    } = this.props

    const {
      id,
      title,
      component
    } = this.props.currentProject

    return(
      <div id={s.container}>
        <h1>Some of my works</h1>
        <div id={s.projects}>
          <Project src={test}/>
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
    currentProjectFade: state.currentProjectFade
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextProject: (currentId) => {
      const length = projectsData.length
      const nextId = currentId + 1 >= length ? 0 : currentId + 1
      const nextProject = projectsData[nextId]

      dispatch(setProject(nextProject))
    },
    previousProject: (currentId) => {
      const length = projectsData.length
      const nextId = currentId - 1 < 0 ? length - 1 : currentId - 1
      const nextProject = projectsData[nextId]

      dispatch(setProject(nextProject))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ProjectComponent)
