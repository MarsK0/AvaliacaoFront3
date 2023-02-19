import styled from "styled-components"

export const StyledNavBar = styled.div`
  position: relative;
  width: 100%;
  min-height: 7.5vh;
  background: #333333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px){
    flex-direction: column;
    row-gap: 1rem;
  }

  &::before,
  &::after {
    content: '';
    overflow: hidden;
    position: absolute;
    top: 1px;
    width: 100%;
    height: calc(100% + 1px);
    z-index: -1;
    animation: animateNavBar 5s linear infinite;
  }

  @keyframes animateNavBar {
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
    filter: blur(10px);
    opacity: 0.90;
  }
`

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
`