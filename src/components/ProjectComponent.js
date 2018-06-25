import React from 'react'
import { connect } from 'react-redux'
import s from './ProjectComponent.module.scss'
import findimoThumbnail from './thumbnail-findimo.png'
import deliciusThumbnail from './thumbnail-delicius.png'
import Image from './Image'
import test from './test.png'
import Carousel from './Carousel'
import ListSvg from './sort.svg'
import Mouse from './mouse.svg'

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

    const {
      title,
      subtitle,
      description
    } = currentProject

    if(isShowingProject) {
      return(
        <div id={s.container}>
          <div id={s.project}>
            <div id={s.description} data-aos='fade-right'>
              <a onClick={() => this.setState({isShowingProject: false})}><ListSvg id={s.listSvg} />Back to projects</a>
              <h3>Findimo</h3>
              <h4>Design, Front-End Development</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod sem lacus, nec vehicula magna vulputate at. Nulla facilisi. Donec dapibus ante lacus, at rutrum mi venenatis ut.</p>
              <p><strong>Technologies utilisées</strong>: React, Redux, Javascript, HTML, CSS3.</p>
              <a href='/findimo/' target='_blank'>Visit website<Mouse id={s.mouse} /></a>
            </div>
            <div id={s.right}>
              <div id={s.carousel}  data-aos='flip-up'>
                <Carousel autoPlay={true}>
                  <img src={test} className={s.imageScroll} />
                  <img src={test} className={s.imageScroll} />
                  <img src={test} className={s.imageScroll} />
                </Carousel>
              </div>
            </div>
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