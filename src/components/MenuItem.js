import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'
import { FlexCol } from 'Utils/styles'
import Colors from './Colors'

const Border = styled.div`
  width: ${props => props.selected ? '100%' : '0%'};
  height: 3px;
  background-color: ${Colors.RED};
  transition: all 0.1s ease-in-out;
`

const StyledMenuItem = FlexCol.extend`
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  cursor: pointer;

  &:hover ${Border} {
    width: 100%;
  }

  &:hover a {
    color: ${Colors.RED};
  }
`

const Link = styled.a`
  padding-bottom: 15px;
  font-size: 15px;
  color: ${props => props.selected ? Colors.RED : Colors.BLACK};
  text-decoration: none;
  transition: all 0.1s ease-in-out;
`

const StyledAnchorLink = styled(AnchorLink)`
  padding-bottom: 15px;
  font-size: 20px;
  color: ${props => props.selected ? Colors.RED : Colors.BLACK};
  text-decoration: none;
  transition: all 0.1s ease-in-out;
`

export default ({children, selected, onClick, href}) => (
  <StyledMenuItem onClick={onClick}>
   {href ?
      <StyledAnchorLink href={href}>{children}</StyledAnchorLink> :
      <Link selected={selected} >{children}</Link>
    }
    <Border selected={selected} />
  </StyledMenuItem>
)