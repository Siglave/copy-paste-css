import styled, { keyframes } from 'styled-components';

const Flex = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
`

const CompanyName = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.grey5};
    margin-bottom: 8px;
`

export {
    Flex,
    CompanyName
}
