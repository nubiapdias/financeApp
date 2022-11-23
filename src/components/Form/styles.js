import styled from "styled-components";

export const Container = styled.div `
    max-width: 70rem;
    margin: 0 auto;
    margin-top: 1.5rem;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 750px) {
        display: grid;
    }
`;

export const inputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label `
 font-size: 0.7rem;
`;

export const Input = styled.input `
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 0.9rem;
    border: 1px solid #ccc;
`;

export const radioGroup = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    input {
        margin-left: 1.3rem;
        accent-color: black;
        margin-top: 0;
        margin-right: 0.2rem;
    }
`;

export const Button = styled.button `
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #021542;
`;


