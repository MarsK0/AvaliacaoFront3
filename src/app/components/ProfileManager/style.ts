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