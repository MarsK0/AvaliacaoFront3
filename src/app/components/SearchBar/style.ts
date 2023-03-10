import styled from "styled-components";

export const StyledSearchBar = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 1rem;
  padding: 0 1rem;
  outline: none;
  z-index: 1;
  background-color: #333333;
  font-size: 0.8rem;
  color: #fff;
`

export const StyledSpan = styled.span`
  position: absolute;
  left: 1em;
  pointer-events: none;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s linear;
  font-size: 0.8rem;
  color: #fff;
`

export const InputWrapper = styled.div`
  width: 50%;
  min-width: 175px;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 500px){
    width: 45%;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    border-radius: 1.5rem;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: 0;
    animation: animateInput 5s linear infinite;
  }

  @keyframes animateInput {
    0%{
      background: #ff0000;
    }
    10%{
      background: #ff8000;
    }
    20%{
      background: #fff700;
    }
    30%{
      background: #aaff00;
    }
    40%{
      background: #2bff00;
    }
    50%{
      background: #00ffa2;
    }
    60%{
      background: #00ccff;
    }
    70%{
      background: #002aff;
    }
    80%{
      background: #7b00ff;
    }
    90%{
      background: #ff00fb;
    }
    100%{
      background: #ff0000;
    }
  }

  &::after{
    filter: blur(2px);
    opacity: 0.90;
  }

  & input:focus ~span,
  & input:not(:placeholder-shown) ~span {
    transform: translateX(.25rem) translateY(-1.5em);
    font-size: 0.6em;
    transition: .2s linear;

    &::before{
      content: '';
      position: absolute;
      left: -.1rem;
      border-radius: 0.25rem;
      width: calc(100% + .2rem);
      height: calc(80%);
      z-index: -1;
      background: #333333;
    }
  }
`