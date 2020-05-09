import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/dist/v4';
import { ArrowUp, ArrowDown } from '../Arrows/Arrows';
import SidebarItem from './SidebarItem';

const categories = [
    { category: 'Breakfast' },
    { category: 'Salad' },
    { category: 'Meze' },
    { category: 'Chicken' },
    { category: 'Beef' },
    { category: 'Fish' },
    { category: 'Pasta' },
    { category: 'Pizza' },
];

const SidebarStyles = styled.div`
    flex: 1;
    background-color: ${(props) => props.theme.palette.main};
    overflow-y: scroll;
    height: 760px;
    width: 95px;
    border-radius: 10px;
    position: relative;
    /* grid-area: sidebar; */

    /* IE10+ */
    -ms-overflow-style: none;
    /* Firefox */
    scrollbar-width: none;
    /* Chrome */
    &::-webkit-scrollbar {
        display: none;
    }
`;

const SidebarContainer = styled.ul`
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.palette.main};
    list-style-type: none;
    display: grid;
    place-items: center;
    margin-top: 5px;
`;

const ArrowContainer = styled.div`
    cursor: pointer;
    text-align: center;
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
    ${(props) =>
        props.down ? `position: absolute; bottom: 0; width: 100%` : ''}
`;

const Sidebar = () => {
    const types = categories.map((cat) => cat.category);
    const [active, setActive] = useState(types[0]);

    return (
        <SidebarStyles>
            {/* <ArrowContainer>
                <ArrowUp />
            </ArrowContainer> */}
            <SidebarContainer>
                {categories.map((c) => (
                    <SidebarItem
                        category={c.category}
                        key={uuid()}
                        setActiveCategory={() => setActive(c.category)}
                        active={active === c.category}
                    />
                ))}
            </SidebarContainer>
            {/* <ArrowContainer down>
                <ArrowDown />
            </ArrowContainer> */}
        </SidebarStyles>
    );
};

export default Sidebar;
