import styled from "styled-components";

interface Props{
  color: string,
  text: string
}

const NeonButton: React.FC<Props> = ({color, text}) => {

  const StyledButton = styled.button`
    position:relative;
    width: 40%;
    height: 2.25rem;
    font-size: 1em;
    font-weight: bold;
    color: ${color};
    cursor: pointer;
    text-decoration: none;
    border: none;
    border-radius: 1rem;
    background: none;
    padding: .25rem;
    box-shadow: 0 0 5px .15rem ${color}, 0 0 5px .15rem ${color} inset;
    transition: .2s linear;

    &:hover{
      background: ${color};
      color: #333333;
    }
  `
  return(
    <StyledButton>
      {text}
    </StyledButton>
  )
}

export default NeonButton