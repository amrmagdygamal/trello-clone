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

export const NewItemForm = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`

export const NItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 7px;
  border: none;
  box-shadow: none;
  color: #fff;
  cursor: pointer;
  text-align: center;
  padding: 7px 12px;

`


export const NItemInput = styled.input`
  border-radius: 7px;
  border: none;
  margin-bottom: .5rem;
  box-shadow: #091e4241 0px 1px 0px 0px;
  padding: .5rem 1rem;
  width: 100%;
`