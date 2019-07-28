import React, { useCallback } from 'react';
import { Button, Dropdown, Icon, Menu } from 'antd';
import styled from 'styled-components';

import useLayoutActions from '../../hooks/useLayoutActions';
import useLayoutState from '../../hooks/useLayoutState';

const MenuGroup = styled(Menu.ItemGroup)`
    .ant-dropdown-menu-item-group-list {
        list-style: none;
        padding: ${(props) => props.theme.spacing(1)};
    }
    
    .ant-dropdown-menu-item-group-title {
        font-weight: 500;
    
        .anticon {
            margin-right: ${(props) => props.theme.spacing(1)};
        }
    }
`;

export default React.memo(() => {

    const state = useLayoutState();

    const actions = useLayoutActions();

    const onChangeOrientation = useCallback(
        ({key}) => (
            actions.setOrientation(key)
        ),
        [
            actions
        ]
    );

    return (
        <Dropdown
            overlay={
                <Menu selectedKeys={[state.orientation]}>
                    <MenuGroup
                        title={
                            <>
                                <Icon type='layout'/>
                                Layout
                            </>
                        }>
                        <Menu.Item
                            key='horizontal'
                            onClick={onChangeOrientation}>
                            <Icon type='vertical-align-middle' rotate={90}/>
                            Horizontal
                        </Menu.Item>
                        <Menu.Item
                            key='vertical'
                            onClick={onChangeOrientation}>
                            <Icon type='vertical-align-middle'/>
                            Vertical
                        </Menu.Item>
                    </MenuGroup>
                </Menu>
            }
            trigger={['click']}>
            <Button icon='setting' shape='circle' type='primary'/>
        </Dropdown>
    );
});