import styled from "styled-components";

export interface Props{
  translation: any
}

export const Container = styled.div<Props>`
  //flex: 1;
  //max-width: 100dvw;
  //overflow: auto;
  //position: relative;
  .bigImageBorderStyle {
    border-radius: 50%;
    border: 0.1rem solid var(--color-blue-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6.25rem;
    height: 6.25rem;
    overflow: hidden;
  }

  .changeImageDivStyle {
  }

  .checkboxStyle {
  }

  .colorInputBorderStyle {
    display: grid;
    width: 10rem;
    height: 2.38rem;
  }
  .colorInputContainerStyle {
    grid-column: 1;
    grid-row: 1;
    border-radius: 0.375rem;
    border: 1px solid var(----color-grey-alternative, #71717a);
    overflow: hidden;
  }

  .colorContainer {
    position: relative;
    width: 4.4375rem;
    height: 1.5rem;
    border-radius: 0.375rem;
    top: 0.1rem;
    left: 0.81rem;
    overflow: hidden;
  }

  .colorInputLegendStyle {
    color: var(--color-blue-primary);
    text-align: center;
    font-family: Ubuntu;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 171.429% */
    text-transform: capitalize;
  }

  .colorInputLegendBackStyle {
    background-color: var(--color-white-primary);
    grid-column: 1;
    grid-row: 1;
    position: relative;
    top: -0.8rem;
    left: 0.94rem;
    border-radius: 0.25rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    height: fit-content;
    width: fit-content;
  }

  .colorInputStyle {
    border: 0;
    padding: 0;
    width: 200%;
    height: 200%;
    cursor: pointer;
    transform: translate(-25%, -25%);
  }
  .imageEditButtonStyle {
    color: var(----color-blue-tertiary, #2baaca);
    font-family: Ubuntu;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 200% */
    text-transform: capitalize;
    white-space: nowrap;
    cursor: pointer;
  }

  .ImageStyle {
    width: 100%;
    border-radius: 50%;
  }

  .administrationInputFieldStyle {
    //width: 21.875rem;
    width: 90dvw; //Test for responsivity

    @media (min-width: 720px) {
      width: 21.875rem;
    }
    div:last-child{
      background-color: var(--color-white-primary);
    }
    p {
      background-color: var(--color-white-primary);
      color: var(--color-blue-primary);
    }

    input {
      background-color: var(--color-white-primary);
    }
  }

  .bigGeneralInputField {
    //width: 22.1875rem;
    width: 90dvw; //Test for responsivity
    @media (min-width: 720px) {
      width: 18.75rem;
    }
    div:last-child{
      background-color: var(--color-white-primary);
    }
    p {
      background-color: var(--color-white-primary);
      color: var(--color-blue-primary);
    }

    input {
      background-color: var(--color-white-primary);
    }
  }

  .requiredFields {
    position: relative;
    label {
      div {
        p {
          color: red;
        }
        border-color: red;
      }
    }
  }

  .requiredFields:before {
    position: absolute;
    font-family: "Ubuntu";
    top: 2.4rem;
    content: "${(props) => props.translation('Error')}:";
    font-weight: bold;
    font-size: 0.75rem;
    color: red;
  }

  .requiredFields:after {
    position: absolute;
    font-family: "Ubuntu";
    top: 2.4rem;
    left: 2.2rem;
    content: "${(props) => props.translation('this field is mandatory')}";
    font-size: 0.75rem;
    color: red;
  }

  .rowColAccess {
    gap: 0.62rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 720px) {
      flex-direction: row;
      gap: 1.69rem;
    }
  }

  .smallGeneralInputField {
    width: 10.125rem;
    flex: 1;

    @media (min-width: 720px) {
      width: 8.4375rem;
      flex: none;
    }

    div:last-child{
      background-color: var(--color-white-primary);
    }
    p {
      background-color: var(--color-white-primary);
      color: var(--color-blue-primary);
    }

    input {
      background-color: var(--color-white-primary);
    }
  }

  .inputField {
    p {
      background-color: var(--color-white-primary);
      color: var(--color-blue-primary);
    }

    input {
      background-color: var(--color-white-primary);
    }
    
  }

  .radioButtonStyle {
  }

  .smallImageBorderStyle {
    border-radius: 50%;
    border: 0.1rem solid var(--color-blue-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.125rem;
    height: 3.125rem;
    overflow: hidden;
  }

  .smallImageContainerStyle {
    flex: 1;
    display: flex;
    align-items: center;
  }

  #ResponsibleEmailField {
    position: relative;
  }
  .textButton {
    position: absolute;
    right: 0;
    color: var(----color-blue-tertiary, #2baaca);
    font-family: Ubuntu;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 200% */
    text-transform: capitalize;
    cursor: pointer;
  }

  .backgroundFocus{
    position: absolute;
    z-index: 39999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
  }

  .modalCropImage {
    background-color: transparent;
    position: absolute;

    z-index: 40000;
    top: 50%;
    left: 50%;
    margin-left: -35dvw;
    margin-top: -35dvw;
    @media (min-width: 720px) {
      margin-left: -300px;
      margin-top: -300px;
      top: 50%;
      left: 50%;
    }
  }
  // Image cropper
  .cropper {
    width: 100px;
    height: 100px;
    max-width: 70dvw;
    max-height: 70dvw;

    @media (min-width: 720px) {
      width: 600px;
      height: 600px;
    }
  }
  .cropper-crop-box, .cropper-view-box {
    border-radius: 50%;
  }

  .cropper-view-box {
    box-shadow: 0 0 0 1px #39f;
    outline: 0;
  }

  .cropper-face {
    background-color:inherit !important;
  }

  .cropper-dashed, .cropper-point.point-se, .cropper-point.point-sw, .cropper-point.point-nw,   .cropper-point.point-ne, .cropper-line {
    display:none !important;
  }

  .cropper-view-box {
    outline:inherit !important;
  }
`;
