import styled from "styled-components";

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 5rem;
    outline: none;
    padding: 1rem 1.4rem;
`;

const Button = styled.button`
    align-self: flex-end;
    border-radius: 5px;
    border: 1px solid dark;
    cursor: pointer;
    padding: .3rem 1rem;
    margin: 1.4rem 0;
`;

export { Formulario, TextArea, Button };