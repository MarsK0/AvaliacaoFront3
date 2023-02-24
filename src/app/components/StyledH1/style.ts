import styled from "styled-components"

export const StyledH1 = styled.h1`
  position: absolute;
  top: 0;
  font-size: 3em;
  text-align: center;
  margin: 2rem 0;
  filter: blur(px);
  animation: animateSignupH1 5s linear infinite;

  @media (max-width: 500px){
    font-size: 2.5em;
  }

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