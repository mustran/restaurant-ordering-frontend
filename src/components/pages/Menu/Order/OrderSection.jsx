import React from 'react';
import styled from 'styled-components';
import colors from '../../../../theme/colors';
import { FaShoppingBag } from 'react-icons/fa';

const StyledOrder = styled.div`
    background-color: ${colors.garden};
    width: 323px;
    height: 116px;
    border-radius: 10px;
`;

const YourOrder = styled.h2`
    color: white;
`;

const OrderButton = styled.button`
    color: ${colors.white};
    background-color: ${colors.backgroundColor};
    font-weight: ${(props) => props.theme.weights.bold};
    width: 95%;
    height: 35px;
    border-radius: 5px;
    border: none;
    outline: none;
    text-transform: uppercase;
`;

const OrderSection = () => {
    return (
        <StyledOrder>
            <YourOrder>
                <FaShoppingBag /> Your order
            </YourOrder>
            <OrderButton>Log in</OrderButton>
        </StyledOrder>
    );
};

export default OrderSection;
