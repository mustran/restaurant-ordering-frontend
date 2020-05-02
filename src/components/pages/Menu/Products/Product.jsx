import React from 'react';
import styled from 'styled-components';
import { LineBreak } from '../../../Footer/Footer';
import NumericInput from '../../../NumericInput/NumericInput';
import colors from '../../../../theme/colors';

const StyledProduct = styled.div`
    color: ${colors.white};
    display: grid;
    padding: 10px;
    grid-template-columns: minmax(300px, 1fr);
    /* width: 320px; */
    height: 263px;
    border-radius: 10px;
    background-color: rgba(17, 21, 36, 0.8);
`;

const ProductName = styled.h2`
    text-align: center;
    text-transform: uppercase;
`;

const Description = styled.p`
    color: ${(props) => props.theme.palette.main};
    font-size: ${(props) => props.theme.sizes.medium};
    text-align: center;
`;

const ServingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Serving = styled.p`
    color: white;
`;

const Product = ({ productName, description }) => {
    return (
        <StyledProduct>
            <ProductName>{productName}</ProductName>
            <LineBreak />
            <Description>{description}</Description>
            <LineBreak />
            <ServingWrapper>
                <Serving>Serving</Serving>
                <NumericInput value={0} min={0} max={5} />
            </ServingWrapper>
            <div>
                <button>
                    <span>logo</span>Add to bag
                </button>
                <span>Fav</span>
            </div>
        </StyledProduct>
    );
};

export default Product;
