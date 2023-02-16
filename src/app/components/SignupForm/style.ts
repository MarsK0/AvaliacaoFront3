import styled from "styled-components"

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
  row-gap: 1.5rem;

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
    animation: animate 5s linear infinite;
  }

  @keyframes animate {
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