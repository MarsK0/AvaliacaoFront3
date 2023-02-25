import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  z-index: -100;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerHome = styled.div`
position: absolute;
z-index: -100;
width: 100%;
min-height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const ContainerMessages = styled.div`
  margin-top: 1rem;
  z-index: -10;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 3.5rem;
  row-gap: 2rem;
  background-color: #1c1c1c;
`
