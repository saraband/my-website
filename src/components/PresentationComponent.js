import React from 'react'
import getTrFn from './Translation'
import { connect } from 'react-redux'
import BannerComponent from 'Components/BannerComponent'
import Graph from './graph-3.svg'
import styled from 'styled-components'
import { FlexCol } from 'Utils/styles'
import Colors from './Colors'

const StyledPresentation = FlexCol.extend`
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
`

const TitlesContainer = FlexCol.extend`
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

const Title = styled.h1`
  text-align: center;
  color: ${Colors.BLACK};
  font-size: 50px;
  margin: 0;
`

const Subtitle = Title.withComponent('h2').extend`
  font-family: 'Open Sans Light', Arial, sans-serif;
  font-size: 20px;
`

const graphStyles = {
  height: '60%',
  maxWidth: '70%',
  minWidth: '300px',
  transformOrigin: '50% 100%',
}

class PresentationComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { tr } = this.props

    return(
      <StyledPresentation>
        <BannerComponent />
        <TitlesContainer>
          <Title data-aos='fade-left'>{tr('presentation-title')}</Title>
          <Subtitle data-aos='fade-right'>{tr('presentation-subtitle')}</Subtitle>
        </TitlesContainer>
        <Graph style={graphStyles} data-aos='flip-up' data-aos-delay={300} />
      </StyledPresentation>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tr: getTrFn(state.lang)
  }
}

export default connect(mapStateToProps)(PresentationComponent)