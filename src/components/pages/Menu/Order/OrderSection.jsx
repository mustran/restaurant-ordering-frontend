import React from 'react';
import styled from 'styled-components';
import colors from '../../../../theme/colors';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StyledOrder = styled.div`
    background-color: ${(props) => props.theme.palette.main};
    width: 323px;
    height: 116px;
    border-radius: 10px;
    /* grid-area: orderSection; */
    @media (max-width: 1016px) {
        width: 100%;
    }
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
    cursor: pointer;
`;

const OrderSection = () => {
    return (
        <StyledOrder>
            <YourOrder>
                <FaShoppingBag /> Your order
            </YourOrder>
            <Link to="/login">
                <OrderButton>Log in</OrderButton>
            </Link>
        </StyledOrder>
    );
};

export default OrderSection;
