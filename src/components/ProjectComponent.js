import React from 'react'
import { connect } from 'react-redux'
import s from './ProjectComponent.module.scss'

import getTrFn from './Translation'
import projects from './ProjectsData'
import Image from './Image'
import Carousel from './Carousel'

import ListSvg from './sort.svg'
import MouseSvg from './mouse.svg'
import patternPng from './pattern.png'

/*
** Thumbnails items shown in the
** `Some of my works` section
*/
const ProjectItem = ({
  src,
  onClick,
  thumbnail,
  title,
  tr,
  id
}) => {
  return(
    <div
      className={s.project}
      onClick={onClick}
      data-aos='flip-up'
      >
      <div className={s.projectOverlay}>
        <h3>{title}</h3>
        <h4>{tr(id)['subtitle']}</h4>
        <a>{tr('projects-view-project-button')}</a>
      </div>
      <img src={thumbnail} />
    </div>
  )
}

class ProjectComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentProject: {},
      isShowingProject: false
    }
  }

  handleViewProject = (project) => {
    this.setState({
      currentProject: project,
      isShowingProject: true
    })
  }

  render() {
    const { tr } = this.props
    const {
      currentProject,
      isShowingProject
    } = this.state

    const {
      id,
      title,
      images,
      video,
      visit,
      technologies
    } = currentProject

    /*
    **  PROJECT INFORMATIONS
    */
    if(isShowingProject) {
      return(
        <div id={s.container}>
        <div id='works'></div>
          <div id={s.project}>
            <div id={s.description} data-aos='fade-right'>

              {/* Back to projects button */}
              <a onClick={() => this.setState({isShowingProject: false})}>
                <ListSvg id={s.listSvg} />
                {tr('projects-back-to-projects')}
              </a>

              {/* Project description */}
              <h3>{title}</h3>
              <h4>{tr(id)['subtitle']}</h4>
              <p>{tr(id)['description']}</p>
              <p><strong>{tr('projects-technologies-used')}</strong>:&nbsp;{technologies.join(', ')}.</p>

              {/* If it's possible to visit the project website, show a link to it */}
              {visit && 
                <a href={visit}
                  target='_blank'
                  style={{backgroundImage: `url(${patternPng})`}}>
                    {tr('projects-visit-website')}
                    <MouseSvg id={s.mouse} />
                </a>
              }
            </div>

            {/* Carousel or video depending on the project */}
            <div id={s.right} className={video ? s.rightStyleForVideo : null} >
              {video ? video() : (
                <div id={s.carousel}  data-aos='flip-up'>
                  <Carousel autoPlay={true}>
                    {images.map((imgSrc, i) => <Image key={i} src={imgSrc}/>)}
                  </Carousel>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }

    /*
    **  PROJECTS THUMBNAILS LIST
    */
    return(
      <div id={s.container}>
      <div id='works'></div>
        <h1 data-aos='fade-up'>
          {tr('projects-title')}
          <div className={s.border} data-aos='fade-up'></div>
        </h1>
        <div id={s.projects} >
          {projects.map((p, i) => (
            <ProjectItem
              {...p}
              onClick={() => this.handleViewProject(p)}
              key={i}
              tr={tr}
              />
          ))}
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

export default connect(mapStateToProps)(ProjectComponent)