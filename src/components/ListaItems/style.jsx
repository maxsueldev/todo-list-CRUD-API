import styled from "styled-components";

const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    background-color: #808080;
    padding: 1rem;
    margin-top: 1rem;

    svg {
        font-size: 20px;
        margin-left: .4rem;
        cursor: pointer;
    }
`;

export { Item };