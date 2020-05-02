import React from 'react';
import styled from 'styled-components';
import CategoryLogo from '../../../../assets/images/breakfast_icon.svg';
import colors from '../../../../theme/colors';

const SidebarLogo = styled.img`
    height: 60px;
    width: 60px;
`;

const Category = styled.p`
    color: ${colors.white};
    font-weight: ${(props) => props.theme.weights.bold};
`;

const ListItemsContainer = styled.li`
    cursor: pointer;
    display: grid;
    place-items: center;
`;

const SidebarItem = ({ category }) => (
    <ListItemsContainer>
        <SidebarLogo src={CategoryLogo} alt={category} />
        <Category>{category}</Category>
    </ListItemsContainer>
);

export default SidebarItem;
