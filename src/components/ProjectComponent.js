import React from 'react'
import { connect } from 'react-redux'
import './ProjectComponent.scss'
import InlineSvg from './InlineSvg'
import LeftArrow from './arrow-left-red.svg'
import RightArrow from './arrow-right-red.svg'
import projectsData from './ProjectsData'
import HideLogo from './eye-hidden.svg'
import ShowLogo from './eye-open.svg'
import {
  setProject
} from 'Actions/index'

class ProjectComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isMenuCollapsed: false,
      isOverlay: true
    }
  }

  render() {
    const {
      nextProject,
      previousProject,
      currentProjectFade
    } = this.props

    const {
      isMenuCollapsed,
      isOverlay
    } = this.state

    const {
      id,
      title,
      component
    } = this.props.currentProject

    return(
      <div id='project-container'>{this.props.test}
        {isOverlay ? <div id='project-overlay' onClick={() => this.setState({isOverlay: false})}></div> : null}
        <div id='project-controls' className={isMenuCollapsed ? 'menuCollapse' : 'menuExpand'}>
          <div id='project-controls-hide'>
            {!isMenuCollapsed ? (
              <HideLogo id='hide-logo' onClick={() => this.setState({isMenuCollapsed: true})}/>
            ) : (
              <ShowLogo id='hide-logo' onClick={() => this.setState({isMenuCollapsed: false})}/>
             )}
          </div>
          <div id='project-controls-title'>
            <LeftArrow
              className='arrow-img'
              onClick={() => previousProject(id)}
              />
            <div className='flex-col'>
              <h1>Interface design & implementation</h1>
              <h3>Findimo, real estate agency</h3>
            </div>
            <RightArrow
              className='arrow-img'
              onClick={() => nextProject(id)}
              />
          </div>
          <div id='project-controls-description'>
            <p>Création du design (Photoshop, InDesign, Illustrator).<br />Implémentation de l'interface à l'aide de ReactJS, HTML, CSS3.<br />Backend: NodeJS, Express, MongoDB.<br />Autre: Webpack</p>
          </div>
        </div>
        <div id='project-panel' className={currentProjectFade} >
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
