import React from 'react';
import styled from 'styled-components';
import colors from '../../theme/colors';

export const LineBreak = styled.div`
    border-bottom: 2px solid ${(props) => props.theme.palette.main};
    width: 100%;
    margin-top: ${(props) => `${props.top}px` || 0};
    margin-bottom: ${(props) => `${props.bottom}px` || `0px`};
`;

const CopyrightStyled = styled.p`
    color: ${colors.white};
`;

export const Copyright = () => (
    <CopyrightStyled>
        Copyright ©2020 All rights reserved | Developed by ArgDevIO & mustran
    </CopyrightStyled>
);
