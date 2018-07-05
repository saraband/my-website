import React from 'react'
import styled from 'styled-components'
import Colors from './Colors'

/*
**  CUBE STYLES
*/
const CubeFace = styled.div`
 position:absolute;
  width:150px;
  height:150px;
  background:rgba(0,0,0,0.1);
`
/*
const Front = CubeFace.extend`transform: rotateY(  0deg) translateZ(100px);`
const Right = CubeFace.extend`transform: rotateY( 90deg) translateZ(100px);`
const Back = CubeFace.extend`transform: rotateY(180deg) translateZ(100px);`
const Left = CubeFace.extend`transform: rotateY(-90deg) translateZ(100px);`
const Top = CubeFace.extend`transform: rotateX( 90deg) translateZ(100px);`
const Bottom = CubeFace.extend`transform: rotateX(-90deg) translateZ(100px);`*/

const Cube = styled.div`
  position:relative;
  width:300px;
  height:300px;
  transform-style:preserve-3d;
  transition:800ms ease-in-out;

  &:hover {
   transform: rotateX(90deg) rotateY(180deg);
  }

  &:active {
    transform: rotateX(90deg) rotateY(180deg) scale3d(0.9, 0.9, 0.9);
  }

  & div:nth-child(1){
    transform:translateZ(150px);
    background-color: ${Colors.RED};
  }

  & div:nth-child(2){
    transform: rotateX(180deg) translateZ(150px);
    background-color: ${Colors.RED};
  }

  & div:nth-child(3){
    transform: rotateY(-90deg) translateZ(150px);
    background-color: ${Colors.RED};
  }

  & div:nth-child(4){
    transform:rotateY(90deg) translateZ(150px);
    background-color: ${Colors.RED};
  }

  & div:nth-child(5){
    transform: rotateX(90deg) translateZ(150px);
    background-color: ${Colors.RED};
  }

  & div:nth-child(6){
    transform:rotateX(-90deg) rotateZ(180deg) translateZ(150px);
    background-color: ${Colors.RED};
  }
`

const Scene = styled.div`
  width:600px;
  height:600px;
  cursor: pointer;
`
export default ({children}) => (
  <Scene>
    <Cube>
      {/*<Front>{children[0]}</Front>
      <Back></Back>
      <Right></Right>
      <Left>{children[1]}</Left>
      <Top></Top>
      <Bottom></Bottom>*/}
      <CubeFace>{children[0]}</CubeFace>
      <CubeFace></CubeFace>
      <CubeFace></CubeFace>
      <CubeFace></CubeFace>
      <CubeFace></CubeFace>
      <CubeFace>{children[1]}</CubeFace>
    </Cube>
  </Scene>
)