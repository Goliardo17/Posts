import styled from "styled-components";

export const Image = styled.img`
    max-width: 200px;
    float: left;
    margin-right: 15px;
`

export const Text = styled.div`
    font-size: 15px;
`

export const DeleteButton = styled.button`
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    background: white;
    padding: 5px 15px;
    clolr: black;

    &:hover {
        background-color: red;
        color: white;
    }
`

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
`

export const ModalText = styled.div`
    colore: black;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

export const ModalContent = styled.div`
    display: flex;
    gap: 15px;
    align-content: center;
    justify-content: center;
`