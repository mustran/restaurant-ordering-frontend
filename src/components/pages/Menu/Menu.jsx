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
    grid-template-columns: 95px 3fr;
    grid-gap: 20px;
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
                <Products products={products} />
                <OrderSection />
            </Wrapper>
        </>
    </>
);

export default Menu;
