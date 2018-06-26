import React from 'react'
import { connect } from 'react-redux'
import getTrFn from './Translation'
import s from './ProjectComponent.module.scss'
import Image from './Image'
import Carousel from './Carousel'
import ListSvg from './sort.svg'
import Mouse from './mouse.svg'
import pattern from './pattern2.jpg'

const ProjectItem = ({
  src,
  onClick,
  thumbnail,
  title,
  tr
}) => {
  return(
    <div
      className={s.project}
      onClick={onClick}
      data-aos='flip-up'
      >
      <div className={s.projectOverlay}>
        <h3>{title}</h3>
        <h4>Design & Front-end development</h4>
        <a>{tr('projects-view-project-button')}</a>
      </div>
      <img src={thumbnail} />
    </div>
  )
}

class ProjectComponent extends React.Component {
  constructor(props) {
    super(props)

    this.projects = [
      {
        id: 'findimo',
        title: 'Findimo',
        thumbnail: require('./thumbnail-findimo.png'),
        images: [
          require('./img/findimo-1.jpg'),
          require('./img/findimo-2.jpg')
        ]
      },
      {
        id: 'delicius',
        title: 'Delicius',
        thumbnail: require('./thumbnail-delicius.png'),
        images: [
          require('./img/delicius-1.jpg'),
          require('./img/delicius-2.jpg'),
          require('./img/delicius-3.jpg')
        ]
      },
      {
        id: 'chitchat',
        title: 'Chit Chat',
        thumbnail: require('./thumbnail-delicius.png'),
        images: [
          require('./img/delicius-1.jpg'),
          require('./img/delicius-2.jpg'),
          require('./img/delicius-3.jpg')
        ]
      },
      {
        id: 'goldize',
        title: 'The Source',
        thumbnail: require('./thumbnail-delicius.png'),
        images: [
          require('./img/delicius-1.jpg'),
          require('./img/delicius-2.jpg'),
          require('./img/delicius-3.jpg')
        ]
      },
      {
        id: 'jeuxdugolfe',
        title: 'Jeux du Golfe',
        thumbnail: require('./thumbnail-delicius.png'),
        images: [
          require('./img/delicius-1.jpg'),
          require('./img/delicius-2.jpg'),
          require('./img/delicius-3.jpg')
        ]
      },
      {
        id: 'thesource',
        title: 'The Source',
        thumbnail: require('./thumbnail-delicius.png'),
        images: [
          require('./img/delicius-1.jpg'),
          require('./img/delicius-2.jpg'),
          require('./img/delicius-3.jpg')
        ]
      }
    ]

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
      images
    } = currentProject

    if(isShowingProject) {
      return(
        <div id={s.container}>
          <div id={s.project}>
            <div id={s.description} data-aos='fade-right'>
              <a onClick={() => this.setState({isShowingProject: false})}><ListSvg id={s.listSvg} />Back to projects</a>
              <h3>{title}</h3>
              <h4>{tr(id)['subtitle']}</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod sem lacus, nec vehicula magna vulputate at. Nulla facilisi. Donec dapibus ante lacus, at rutrum mi venenatis ut.</p>
              <p><strong>Technologies utilisées</strong>: React, Redux, Javascript, HTML, CSS3.</p>
              <a href='/findimo/' target='_blank' style={{backgroundImage: `url(${pattern})`}}>Visit website<Mouse id={s.mouse} /></a>
            </div>
            <div id={s.right}>
              <div id={s.carousel}  data-aos='flip-up'>
                <Carousel autoPlay={true}>
                  {images.map(imgSrc => <Image src={imgSrc}/>)}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return(
      <div id={s.container}>
      <div id='works'></div>
        <h1 data-aos='fade-up'>
          {tr('projects-title')}
          <div className={s.border} data-aos='fade-up'></div>
        </h1>
        <div id={s.projects} >
          {this.projects.map((p, i) => (
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