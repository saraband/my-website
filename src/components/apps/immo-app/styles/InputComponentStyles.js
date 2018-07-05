import styled from 'styled-components'
import Colors from './Colors'
import {
  FlexCol,
  FlexRow,
  FadeRightKeyframes
} from 'Utils/styles'

export const StyledInputComponent = styled.div`
  position: sticky;
  top: 35px;
  margin-right: 35px;
  margin-top: 35px;
  width: 300px;
  background-color: white;
  border: 1px solid #e3e3e3;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
`

export const Form = FlexCol.withComponent('form')

export const Input = styled.input`
  border: 1px solid ${Colors.BLUE};
  color: ${Colors.BLUE};
  font-size: 0.8em;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-position: 10px 8px;
  background-size: auto 20px;
  background-repeat: no-repeat;
  border-radius: 2px;
  padding-left: 40px;

  &:focus {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
`
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: none;
  font-size: 1em;
  background-color: tomato;
  margin-top: 10px;
  color: white;
  border-radius: 2px;
  transition: all 0.1s linear;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
  }
`