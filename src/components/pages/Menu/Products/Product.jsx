import React from 'react';
import styled from 'styled-components';
import { LineBreak } from '../../../Footer/Footer';
import NumericInput from '../../../NumericInput/NumericInput';
import colors from '../../../../theme/colors';
import { BsHeart } from 'react-icons/bs';

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

const AddToBagButton = styled.button`
    background-color: ${(props) => props.theme.palette.main};
    width: 90%;
    height: 30px;
    border-radius: 5px;
`;

const FavIcon = styled(BsHeart)`
    border: 1px solid ${(props) => props.theme.palette.main};
    color: ${(props) => props.theme.palette.main};
    border-radius: 5px;
    width: 10%;
    margin-left: 5px;
    padding: 5px;
    box-sizing: content-box;
    cursor: pointer;
`;

const AddToBagAndFavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
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
            <AddToBagAndFavWrapper>
                <AddToBagButton>
                    <span>logo</span>Add to bag
                </AddToBagButton>
                <FavIcon />
            </AddToBagAndFavWrapper>
        </StyledProduct>
    );
};

export default Product;
