import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar';
import { LineBreak, Copyright } from '../../Footer/Footer';
import Product from './Products/Product';
import Products from './Products/Products';
import OrderSection from './Order/OrderSection';

const Wrapper = styled.div`
    /* background-color: red; */
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 95px 1fr;
    grid-gap: 20px;

    /* todo */
    /* @media (max-width: 662px) {
        grid-template-columns: 1fr;
        grid-template-rows: 500px 100px 20px;
        grid-template-areas: 
        "products"
        "sidebar"
    } */

`;

const ProductsAndOrderWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    @media (max-width: 1016px) {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        /* background-color: red; */
    }
`;

const products = [
    {
        product: 'Garden breakfast',
        description:
            '2 fried eggs, 2 chicken sausages, white cheese, cucumber, tomatoes, olives, honey',
    },
    {
        product: 'Garden breakfast',
        description:
            '2 fried eggs, 2 chicken sausages, white cheese, cucumber, tomatoes, olives, honey',
    },
    {
        product: 'Garden breakfast',
        description:
            '2 fried eggs, 2 chicken sausages, white cheese, cucumber, tomatoes, olives, honey',
    },
    {
        product: 'Garden breakfast',
        description:
            '2 fried eggs, 2 chicken sausages, white cheese, cucumber, tomatoes, olives, honey',
    },
    {
        product: 'Garden breakfast',
        description:
            '2 fried eggs, 2 chicken sausages, white cheese, cucumber, tomatoes, olives, honey',
    },
    {
        product: 'Garden breakfast',
        description:
            '2 fried eggs, 2 chicken sausages, white cheese, cucumber, tomatoes, olives, honey',
    },
    {
        product: 'Garden breakfast',
        description:
            '2 fried eggs, 2 chicken sausages, white cheese, cucumber, tomatoes, olives, honey',
    },
    {
        product: 'Garden breakfast',
        description:
            '2 fried eggs, 2 chicken sausages, white cheese, cucumber, tomatoes, olives, honey',
    },
    {
        product: 'Garden breakfast',
        description:
            '2 fried eggs, 2 chicken sausages, white cheese, cucumber, tomatoes, olives, honey',
    },
];

const Menu = () => (
    <>
        <LineBreak top={20} bottom={10} />
        <>
            <Wrapper>
                <Sidebar />
                <ProductsAndOrderWrapper>
                    <Products products={products} />
                    <OrderSection />
                </ProductsAndOrderWrapper>
            </Wrapper>
        </>
    </>
);

export default Menu;
