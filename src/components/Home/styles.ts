import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-white-secundary);
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;
  height: calc(100dvh - 50px); //TODO To compensate for the header, would be good to find a better way to do this
  
  .closeModal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
  }

  @media (min-width: 720px) {
    width: 100vw;
    height: calc(100dvh - 70px);
    background-color: var(--color-white-secundary);
  }
  
  .DashboardCardQtyStyle{
    color: var(--color-blue-primary);
    font-size: 1.875rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.5rem;
    
    @media (min-width: 720px) {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
  }
  
  .DashboardCardLegendStyle{
    color: var(--color-black-primary);
    font-size: 1rem;
    text-align: center;
    white-space: nowrap;
    
    @media (min-width: 720px) {
      font-size: 1.25rem;
    }
  }
  
  .DashboardCardIconStyle{
    width: 5rem;
    height: 5rem;
    
    @media (min-width: 720px) {
        width: 6.25rem;
        height: 6.25rem;
    }
  }


`;
