import styled from "styled-components";

export const WidthContainer = styled.div<{ maxWidth?: string }>`
    max-width: ${(p) => p.maxWidth ?? '100%'};
    margin: 0 auto;
`
