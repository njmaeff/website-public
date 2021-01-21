import styled from "styled-components";

export const ContainerOuter = styled.div`
    position: absolute;
    background-color: ${({theme}) => theme.palette.light};
    overflow:auto;
    width: 100%;
    height: 100%;
`;
