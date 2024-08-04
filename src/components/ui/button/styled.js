import styled from "styled-components";

const BaseButton = styled.button`
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    background: white;
    padding: 5px 15px;
    color: black;
`

export const ButtonDelete = styled(BaseButton)`
    &:hover {
        background-color: red;
        color: white;
    }
`

export const ButtonSave = styled(BaseButton)`
    &:hover {
        background-color: green;
        color: white;
    }
`

export const ButtonCommon = styled(BaseButton)`
    &:hover {
        background-color: black;
        color: white;
    }
`

export const ButtonDefault = styled.button``