import React from 'react'
import { connect } from 'react-redux'
import s from './ProjectComponent.module.scss'
import test from './thumbnail-immo-app.png'

const Project = ({src, onClick, url, i}) => (
  <div className={s.project} onClick={onClick}
    data-aos='flip-up'
    data-aos-anchor-placement='top-bottom'
    data-aos-duration={1000}
    data-aos-delay={1000}
    >
    <div className={s.projectOverlay}>
      <div>
        <h3>Findimo</h3>
        <h4>Design & Front-end development</h4>
        <a href={url} target='_blank'>See project</a>
      </div>
    </div>
    <img src={src} />
  </div>
)

export default class ProjectComponent extends React.Component {
  constructor(props) {
    super(props)

    this.projects = [
      {pictureUrl: test, url: '/findimo/'},
      {pictureUrl: test, url: '/findimo/'},
      {pictureUrl: test, url: '/findimo/'},
      {pictureUrl: test, url: '/findimo/'},
      {pictureUrl: test, url: '/findimo/'},
      {pictureUrl: test, url: '/findimo/'}
    ]
  }

  render() {

    return(
      <div id={s.container}>
        <h1 data-aos='fade-up'>
          Some of my work
          <div className={s.border} data-aos='fade-up'></div>
        </h1>
        <div id={s.projects} >
          {this.projects.map(({pictureUrl, url}, i) => <Project src={pictureUrl} url={url} key={i} i={i} />)}
        </div>
      </div>
    )
  }
}