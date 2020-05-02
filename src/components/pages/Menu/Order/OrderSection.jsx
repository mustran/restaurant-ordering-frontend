import React from 'react';
import styled from 'styled-components';
import colors from '../../../../theme/colors';

const StyledOrder = styled.div`
    background-color: ${colors.garden};
    width: 323px;
    height: 116px;
    border-radius: 10px;
`;

const OrderButton = styled.button`
    color: ${colors.white};
    background-color: ${colors.backgroundColor};
    text-transform: uppercase;
`;

const OrderSection = () => {
    return (
        <StyledOrder>
            <OrderButton>Log in</OrderButton>
        </StyledOrder>
    );
};

export default OrderSection;
