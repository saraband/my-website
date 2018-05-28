import React from 'react'
import { connect } from 'react-redux'
import './ProjectComponent.scss'
import InlineSvg from './InlineSvg'
import leftArrow from './leftArrow.svg'
import rightArrow from './rightArrow.svg'
import ProjectDescriptionComponent from './ProjectDescriptionComponent'
import ProjectAppComponent from './ProjectAppComponent'
import {
  nextProject,
  previousProject
} from 'Actions/index'

class ProjectComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      nextProject,
      previousProject
    } = this.props

    return(
      <div id='project-container'>
        <div id='project-overlay'>
          <div id='project-controls'>
            <InlineSvg
              src={leftArrow}
              className='arrow-img'
              onClick={previousProject}
              />
            <InlineSvg
              src={rightArrow}
              className='arrow-img'
              onClick={nextProject}
              />
          </div>
        </div>
        <div id='project-left-panel'>
          <ProjectDescriptionComponent />
        </div>
        <div id='project-right-panel'>
          <ProjectAppComponent />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextProject: () => dispatch(nextProject()),
    previousProject: () => dispatch(previousProject()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ProjectComponent)
