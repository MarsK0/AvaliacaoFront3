import styled from "styled-components"

export const StyledH1 = styled.h1`
  position: absolute;
  font-size: 3em;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2rem;
  filter: blur(px);
  animation: animateSignupH1 5s linear infinite;

  @keyframes animateSignupH1 {
    0%{
      text-shadow: 1px 1px 10px #ff0000;
    }
    10%{
      text-shadow: 1px 1px 10px #ff8000;
    }
    20%{
      text-shadow: 1px 1px 10px #fff700;
    }
    30%{
      text-shadow: 1px 1px 10px #aaff00;
    }
    40%{
      text-shadow: 1px 1px 10px #2bff00;
    }
    50%{
      text-shadow: 1px 1px 10px #00ffa2;
    }
    60%{
      text-shadow: 1px 1px 10px #00ccff;
    }
    70%{
      text-shadow: 1px 1px 10px #002aff;
    }
    80%{
      text-shadow: 1px 1px 10px #7b00ff;
    }
    90%{
      text-shadow: 1px 1px 10px #ff00fb;
    }
    100%{
      text-shadow: 1px 1px 10px #ff0000;
    }
  }
`

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
  background: #333333;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
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

export const Container = styled.div`
  position: absolute;
  z-index: -100;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 25%;
  min-width: 300px;
  height: 400px;
`