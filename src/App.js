import React from 'react';

import Header from './components/Header/Header';
import HeaderLogo from './components/Header/HeaderLogo';
import HeaderTitle from './components/Header/HeaderTitle';
import LayoutMenu from './components/Menus/LayoutMenu';
import OrderEntryForm from './components/Forms/OrderEntryForm';
import OrderEntryGrid from './components/Grids/OrderEntryGrid';
import Body from './components/Layouts/Body';
import Column from './components/Layouts/Column';
import ColumnRow from './components/Layouts/ColumnRow';
import ReSizer from './components/Layouts/ReSizer';

import useLayoutState from './hooks/useLayoutState';

export default React.memo(() => {

    const state = useLayoutState();

    return (
        <Body className='layout'>
            <Header>
                <HeaderTitle level={3}>
                    EXD Trader
                </HeaderTitle>
                <HeaderLogo/>
                <LayoutMenu/>
            </Header>
            <ColumnRow
                orientation={state.orientation}
                type='flex'>
                <Column basis={state.basis[state.orientation]}>
                    <OrderEntryForm/>
                </Column>
                <ReSizer/>
                <Column>
                    <OrderEntryGrid/>
                </Column>
            </ColumnRow>
        </Body>
    );
});