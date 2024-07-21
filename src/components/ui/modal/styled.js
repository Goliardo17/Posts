import styled from "styled-components"

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`

export const Modal = styled.div`
max-width: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    border: 1px solid white;
    padding: 15px;
    width: 500px;
    height: 300px;
    background-color: white;
    display: flex;
    width: 100%;
    gap: 15px;
    flex-direction: column;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`