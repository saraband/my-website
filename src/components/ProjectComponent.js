import React from 'react'
import { connect } from 'react-redux'
import s from './ProjectComponent.module.scss'
import findimoThumbnail from './thumbnail-findimo.png'
import deliciusThumbnail from './thumbnail-delicius.png'
import Image from './Image'
import test from './img/findimo-0.png'

const ProjectItem = ({src, onClick, pictureUrl}) => (
  <div
    className={s.project}
    onClick={onClick}
    data-aos='flip-up'
    >
    <div className={s.projectOverlay}>
      <h3>Findimo</h3>
      <h4>Design & Front-end development</h4>
      <a>See project</a>
    </div>
    <img src={pictureUrl} />
  </div>
)

export default class ProjectComponent extends React.Component {
  constructor(props) {
    super(props)

    this.projects = [
      {id: 0, pictureUrl: findimoThumbnail, url: '/findimo/'},
      {id: 0, pictureUrl: deliciusThumbnail, url: '/delicius/'},
      {id: 0, pictureUrl: findimoThumbnail, url: '/findimo/'},
      {id: 0, pictureUrl: findimoThumbnail, url: '/findimo/'},
      {id: 0, pictureUrl: findimoThumbnail, url: '/findimo/'},
      {id: 0, pictureUrl: findimoThumbnail, url: '/findimo/'}
    ]

    this.state = {
      currentProject: 0,
      isShowingProject: false
    }
  }

  handleViewProject = (project) => {
    this.setState({
      currentProject: project.id,
      isShowingProject: true
    })
  }

  render() {
    const {
      currentProject,
      isShowingProject
    } = this.state

    if(isShowingProject) {
      return(
        <div id={s.container}>
          <h1>
            Project
            <div className={s.border}></div>
          </h1>
          <div id={s.project}>
            <div id={s.description}></div>
            <div id={s.imagesScroll}><Image src={test} className={s.imageScroll} /></div>
          </div>
        </div>
      )
    }

    return(
      <div id={s.container}>
        <h1 data-aos='fade-up'>
          Some of my work
          <div className={s.border} data-aos='fade-up'></div>
        </h1>
        <div id={s.projects} >
          {this.projects.map((p, i) => (
            <ProjectItem
              {...p}
              onClick={() => this.handleViewProject(p)}
              key={i}
              />
          ))}
        </div>
      </div>
    )
  }
}