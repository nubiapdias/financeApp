import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%; 
    height: 6.5rem;
    
    @media (max-width: 750px) {
        width: 25%;
        margin-top: 20px;
        height: 4.5rem;

    p {
        font-size: 0.8rem;
    }

    span {
        font-size: 1.3rem;
    }

    svg {
        display: none;
    }
}
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 0.6rem;

    svg {
        width: 1.6rem;
        height: 1.6rem;
    }
`;

export const headerTitle = styled.p`
    font-size: 1.1rem;
    margin: 0.9rem;
`;

export const Total = styled.span`
    font-size: 1.8rem;
    font-weight: bold;
`;