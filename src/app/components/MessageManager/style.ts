import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: flex-start;
  margin-left: 1rem;

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: 1rem;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`

export const StyledButton = styled.button`
position:relative;
width: 45%;
min-width: 175px;
height: 30px;
font-size: 1em;
color: #0000ff;
cursor: pointer;
text-decoration: none;
border: none;
border-radius: 1rem;
background: none;
padding: .25rem;
box-shadow: 0 0 5px 2px #0000ff;
transition: .2s linear;

@media (max-width: 500px) {
  width: 45%;
}

&:hover{
  background: #0000ff;
  color: #333333;
}
`