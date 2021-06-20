import styled, { keyframes } from 'styled-components';

const Flex = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
`

const CompanyName = styled.h2`
    font-size: 24px;
    color: ${({ theme }) => theme.grey5};
    margin-bottom: 8px;
`

export {
    Flex,
    CompanyName
}
