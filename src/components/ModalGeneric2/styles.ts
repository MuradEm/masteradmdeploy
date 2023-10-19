import styled from "styled-components";
import closeIcon from "../../assets/icons/closeIcon.svg";

export const Container= styled.div`

  --padding: 0.625rem; //10px

  .hero {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
    background-color: var(--color-white-primary);
    
    @media (min-width: 720px) {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      overflow: auto;
    }

    .box {
      display: inline-block;
      position: relative;
      height: 100%;
      width: 100%;
      padding: var(--padding);
      background-color: transparent;
      overflow: auto;

      @media (min-width: 720px) {
        width: auto;
        height: auto;
        min-width: 6.25rem; //100px
        min-height: 6.25rem; //100px
        background-color: var(--color-white-primary);
        border-radius: 0.375rem;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      }

      .btn {
        position: absolute;
        right: var(--padding);
        top: var(--padding);
        background-color: transparent;
        background-image: url(${closeIcon.src});
        background-repeat: no-repeat;
        background-position: center;
        height: 1.5rem; //24px
        width: 1.5rem; //24px
        padding: 0;
        border: none;
        cursor: pointer;
        z-index: 1002;
      }
    }
  }

`;



// utilizado para fazer modal generic com tittle embutido

// position: fixed;
// top: 0;
// right: 0;
// width: 100%;
// height: 100%;
// z-index: 1001;

// @media (min-width: 720px) {
//   padding: 0; 
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .box {
//   height: 100%;
//   display: flex;
//   padding: 0.625rem; //10px
//   flex-direction: column;
//   background-color: var(--color-white-primary);

//   @media (min-width: 720px) {
//     width: auto;
//     height: auto;
//     border-radius: 0.375rem;
//     box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
//   }
// }
// }

// .heroTop {
// position: relative;
// width: 100%;
// height: 3.125rem; //50px
// line-height: 3.125rem; //50px

// @media (min-width: 720px) {
//   min-width: 300px;
// }

// .boxTop {
  
//   h2 {
//     font-size: 1.25rem;
//     font-weight: 400;
//     color: var(--color-blue-primary);

//     @media (min-width: 720px) {
//       font-size: 1.875rem;
//     }
//   }

//   input {
//     position: absolute;
//     right: 0;
//     top: 0.813rem; //13px;
//     background-color: transparent;
//     background-image: url(${closeIcon.src});
//     background-repeat: no-repeat;
//     background-position: center;
//     height: 1.5rem; //24px
//     width: 1.5rem; //24px
//     border: none;
//     cursor: pointer;
//   }

// }
// }

// .heroContent {
// height: 100%;
// width: 100%;
// overflow: auto;

// @media (min-width: 720px) {
//   width: auto;
// }

// .boxContent {
// }
// }

