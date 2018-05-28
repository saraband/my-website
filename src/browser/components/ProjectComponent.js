import React from 'react'
import { connect } from 'react-redux'
import './ProjectComponent.scss'
import InlineSvg from './InlineSvg'
import leftArrow from './leftArrow.svg'
import rightArrow from './rightArrow.svg'
import {
  setProject
} from 'Actions/index'
import projectsData from './ProjectsData'

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
      <div id='project-container'>
        <div id='project-overlay'>
          <div id='project-controls'>
            <InlineSvg
              src={leftArrow}
              className='arrow-img'
              onClick={() => previousProject(id)}
              />
            <InlineSvg
              src={rightArrow}
              className='arrow-img'
              onClick={() => nextProject(id)}
              />
          </div>
        </div>
        <div id='project-left-panel' className={currentProjectFade} >
          {title}
        </div>
        <div id='project-right-panel' className={currentProjectFade} >
          {component}
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
