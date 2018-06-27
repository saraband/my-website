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

    this.projects = [
      {
        id: 'findimo',
        title: 'Findimo',
        thumbnail: require('./thumbnail-findimo.png'),
        visit: '/findimo/',
        technologies: [
          'React',
          'Redux',
          'Javascript',
          'HTML',
          'CSS3',
          'Adobe Suite'
        ],
        images: [
          require('./img/findimo-0.jpg'),
          require('./img/findimo-1.jpg')
        ]
      },
      {
        id: 'delicius',
        title: 'Delicius',
        visit: '/delicius/',
        thumbnail: require('./thumbnail-delicius.png'),
        technologies: [
          'React',
          'Redux',
          'Javascript',
          'HTML',
          'CSS3',
          'Adobe Suite'
        ],
        images: [
          require('./img/delicius-0.jpg'),
          require('./img/delicius-1.jpg'),
          require('./img/delicius-2.jpg')
        ]
      },
      {
        id: 'goldize',
        title: 'Goldize',
        thumbnail: require('./goldize-thumbnail.jpg'),
        technologies: [
          'After Effects',
          'Illustrator',
          'Photoshop'
        ],
        video: () => (
          <iframe id='videoframe' src='https://player.vimeo.com/video/107622034?title=0&byline=0&portrait=0' 
            frameBorder='0'
            allowFullScreen>
          </iframe>
        ),
      },
      {
        id: 'jdg',
        title: 'Jeux du Golfe',
        thumbnail: require('./jdg-thumbnail.jpg'),
        technologies: [
          'Illustrator',
          'Photoshop',
          'Indesign'
        ],
        images: [
          require('./img/jdg-0.jpg'),
          require('./img/jdg-1.jpg'),
          require('./img/jdg-2.jpg')
        ]
      },
      {
        id: 'thesource',
        title: 'The Source',
        thumbnail: require('./thesource-thumbnail.jpg'),
        technologies: [
          'Illustrator',
          'Photoshop',
          'Indesign'
        ],
        images: [
          require('./img/thesource-0.jpg'),
          require('./img/thesource-1.jpg'),
          require('./img/thesource-2.jpg')
        ]
      },
      {
        id: 'chitchat',
        title: 'Chit Chat',
        visit: '/chit-chat/',
        thumbnail: require('./chitchat-thumbnail.jpg'),
        technologies: [
          'React',
          'Redux',
          'Javascript',
          'HTML',
          'CSS3',
          'Adobe Suite'
        ],
        images: [
          require('./img/wip.png')
        ]
      },
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
      images,
      video,
      visit,
      technologies
    } = currentProject

    const rightStyleForVideo = {
      height: '100%',
      position: 'absolute',
      right: '0'
    }

    if(isShowingProject) {
      return(
        <div id={s.container}>
          <div id={s.project}>
            <div id={s.description} data-aos='fade-right'>
              <a onClick={() => this.setState({isShowingProject: false})}><ListSvg id={s.listSvg} />{tr('projects-back-to-projects')}</a>
              <h3>{title}</h3>
              <h4>{tr(id)['subtitle']}</h4>
              <p>{tr(id)['description']}</p>
              <p><strong>{tr('projects-technologies-used')}</strong>:&nbsp;{technologies.join(', ')}.</p>
              {visit && 
                <a href={visit}
                  target='_blank'
                  style={{backgroundImage: `url(${pattern})`}}>
                    {tr('projects-visit-website')}
                    <Mouse id={s.mouse} />
                </a>
              }
            </div>
          {/* style => bug carousel */}
            <div id={s.right} className={video ? s.rightStyleForVideo : null} >
              {video && video()}
              {!video && <div id={s.carousel}  data-aos='flip-up'>
                  <Carousel autoPlay={true}>
                    {images.map((imgSrc, i) => <Image key={i} src={imgSrc}/>)}
                  </Carousel>
                </div>
              }
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