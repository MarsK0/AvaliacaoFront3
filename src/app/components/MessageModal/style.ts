import styled from "styled-components"

export const StaticBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(55, 55, 55, 0.75);
  z-index: 1000;
`

export const StyledForm = styled.form`
position: relative;
width: 100%;
height: 100%;
background: #333333;
border-radius: 1.5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 0 2rem;

&::before,
&::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  border-radius: 1.5rem;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: animateSignupForm 5s linear infinite;
}

@keyframes animateSignupForm {
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
  filter: blur(50px);
  opacity: 0.90;
}

`

export const Wrapper = styled.div`
  margin-top: 2rem;
  width: 35%;
  min-width: 350px;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 1rem;
  padding: 0 1rem;
  outline: none;
  z-index: 1;
  background-color: #333333;
  color: #fff;
  color-scheme: dark;

  &::{
    display: none;
  }
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
  color: #fff;
`

export const InputWrapper = styled.div`
  width: 85%;
  position: relative;
  display: flex;
  align-items: center;
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
    font-size: 0.75em;
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

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 1.25rem;
  padding: .75rem;
  outline: none;
  z-index: 1;
  background-color: #333333;
  color: #fff;
  color-scheme: dark;
  resize: none;
  overflow-y: scroll;
  cursor: auto;
  
  &::-webkit-scrollbar{
    width: .75em;
    border-radius: 50%;
    margin: 20px 0;
  }

  &::-webkit-scrollbar-track{
    margin-block: 1em;
  }

  &::-webkit-scrollbar-thumb{
    background-color: #fff;
    border-radius: 20px;
    height: 10px;
  }
`

export const ButtonWrapper = styled.div`
  width: 85%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const SaveButton = styled.button`
position:relative;
width: 45%;
height: 30px;
font-size: 1em;
color: #00ff00;
cursor: pointer;
text-decoration: none;
border: none;
border-radius: 1rem;
background: none;
padding: .25rem;
box-shadow: 0 0 5px 2px #00ff00;
transition: .2s linear;

@media (max-width: 500px) {
  width: 45%;
}

&:hover{
  background: #00ff00;
  color: #333333;
}
`

export const CancelButton = styled.button`
position:relative;
width: 45%;
height: 30px;
font-size: 1em;
color: #ff0000;
cursor: pointer;
text-decoration: none;
border: none;
border-radius: 1rem;
background: none;
padding: .25rem;
box-shadow: 0 0 5px 2px #ff0000;
transition: .2s linear;

@media (max-width: 500px) {
  width: 45%;
}

&:hover{
  background: #ff0000;
  color: #333333;
}
`

export const Error = styled.p`
  font-size: 10px;
  margin-top: .5rem;
  color: #ff0000;
`