import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #223243;
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 20px;
  width: 100%;

`

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 9px;
  padding: 9px 9px;
  flex-grow: 0;
`

export const ColumnTitle = styled.div`
  padding: 7px 16px 12px;
  font-weight: bold;
`

export const CardContainer = styled.div`
  background-color: #FFF;
  cursor: pointer;
  margin-bottom: .5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 9px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`
type AddItemButtonProps = {
  dark?: boolean
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 5px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  width: 100%;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  &:hover {
    background-color: #ffffff52;
  }
`