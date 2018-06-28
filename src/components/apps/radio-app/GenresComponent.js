import React from 'react'
import { connect } from 'react-redux'
import s from './GenresComponent.module.scss'

const genres = [
  'Blues',
  'Chill-out',
  'Classic',
  'Country',
  'Electronic',
  'Hits',
  'Jazz',
  'Latin',
  'Metal',
  'News - Talk',
  'Podcast',
  'Pop-Rock',
  'Reggae',
  'Urban',
  'Various',
  'World'
]

class GenresComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentGenre: ''
    }
  }

  render() {
    const { currentGenre } = this.state

    return(
      <div id={s.container}>
        <div id={s.left}>
          <div id={s.subcategories}>
            <a><strong>Featured</strong></a>
            <a><strong>Hot near you</strong></a>
            <a><strong>Favorites</strong></a>
          </div>
          <div id={s.genres}>
            {genres.map(g => (
              <a
                className={currentGenre === g ? s.selected : null}
                onClick={() => this.setState({currentGenre: g})}
                >{g}</a>
            ))}
          </div>
        </div>
        {currentGenre !== '' && <div id={s.right}>
            {genres.map((sg, i) => <a key={i} onClick={this.props.onClick}>{sg}</a>)}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(GenresComponent);