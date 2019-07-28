import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

export default styled(Layout.Header)`
    display: flex;
    align-items: center;
    box-shadow: 0.1em -1em 1.4em #000000;
    padding-left: ${(props) => props.theme.spacing(2)};
    padding-right: ${(props) => props.theme.spacing(2)};
`;