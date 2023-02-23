import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: space-between;
  margin-right: 1rem;

  @media (max-width: 500px) {
    margin-right: 0;
    width: 100%;
    justify-content: center;
    margin-bottom: .75rem;
  }
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  filter: invert(100%);

  &:hover{
    cursor: pointer;
  }
`

export const Tip = styled.p`
  visibility: hidden;
  width: 100%;
  color: #fff;
  text-align: center;
  border-radius: 1rem;
  position: absolute;
  top: 0;
  z-index: 1;
  transform: translateX(-250%)
`

export const TipContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover :nth-child(2){
    visibility: visible;
  }
`
