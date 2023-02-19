import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: flex-start;
  margin-left: 1rem;

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: 1rem;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`