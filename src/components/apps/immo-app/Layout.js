import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import ListComponent from './ListComponent'
import InputComponent from './InputComponent'
import BannerComponent from './BannerComponent'
import ShowPropertyComponent from './ShowPropertyComponent'
import Footer from './Footer'
import { FlexRow, FlexCol } from 'Utils/styles'

const StyledLayout = styled.div`
`

const Left = styled.div`
  flex-grow: 1;
`

const Right = styled.div`
  flex-grow: 0;
`

/*
**  FINDIMO LAYOUT
** -> todo: retirer showProperty
*/
class Layout extends React.Component {
  render() {
    const {
      children,
      isPropertyPanelOpen
    } = this.props

    return(
      <StyledLayout>
        {isPropertyPanelOpen && <ShowPropertyComponent />}
        <BannerComponent />
        <FlexRow>
          <Left>
            {children}
          </Left>
          <Right>
            <InputComponent />
          </Right>
        </FlexRow>
        <Footer />
      </StyledLayout>
    )
  }
}

const mapsStateToProps = (state) => {
  return {
    isPropertyPanelOpen: state.immoApp.isPropertyPanelOpen
  }
}

export default connect(mapsStateToProps)(Layout)