import styled from "styled-components"

export const StyledH2 = styled.h2`
  font-weight: bold;
  font-size: 2.5em;
  filter: blur(1px);
  pointer-events: none;
  user-select: none;
  animation: animateSignupH2 5s linear infinite;

  @keyframes animateSignupH2 {
    0%{
      color: #ff0000;
    }
    10%{
      color: #ff8000;
    }
    20%{
      color: #fff700;
    }
    30%{
      color: #aaff00;
    }
    40%{
      color: #2bff00;
    }
    50%{
      color: #00ffa2;
    }
    60%{
      color: #00ccff;
    }
    70%{
      color: #002aff;
    }
    80%{
      color: #7b00ff;
    }
    90%{
      color: #ff00fb;
    }
    100%{
      color: #ff0000;
    }
  }
`

export const StyledForm = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
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
    animation: animateSigninForm 5s linear infinite;
  }

  @keyframes animateSigninForm {
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
  margin-top: 2.5rem;
  width: 25%;
  min-width: 300px;
`

export const Error = styled.p`
  font-size: 10px;
  margin-top: .5rem;
  color: #ff0000;
`

