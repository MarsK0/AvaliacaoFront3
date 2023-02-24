import styled from "styled-components";

export const StyledMessage = styled.div`
  position: relative;
  background: #333;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;

  &::before,
  &::after {
    content: '';
    overflow: hidden;
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
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
  width: 20%;
  min-width: 250px;
  aspect-ratio: 1/1;
`

export const Tip = styled.p`
  visibility: hidden;
  width: 100%;
  background-color: #1c1c1c;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 1rem;
  position: absolute;
  z-index: 1;
`

export const TipContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover :nth-child(2){
    visibility: visible;
  }
`

export const MessageH3 = styled.h3`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  margin-bottom: 5px;
`

export const MessageDescription = styled.p`
    display: -webkit-box;
    width: 100%;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 15px;
`

export const EditButton = styled.button`
position:relative;
width: 45%;
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

export const DeleteButton = styled.button`
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

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

