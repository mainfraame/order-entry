import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Alert, Spin } from 'antd';

const OverlayContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: rgba(255, 255, 255, 0.65);
    height: calc(100% - ${(props) => props.offsetHeight}px);
    top: ${(props) => props.offsetHeight}px;
    width: 100%;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    .ant-alert {
        max-width: 250px;
    }
    
    ${(props) => (`
        ${!props.show && `
            z-index: -1;
        `}
    `)}
`;

const AgGridOverlay = React.memo((props) => (
    <OverlayContainer
        offsetHeight={props.offsetHeight}
        show={props.isLoading || !props.hasData}>

        {props.isLoading &&
        <Spin size='large'/>}

        {!props.isLoading && !props.hasData &&
        <Alert
            message={props.message}
            type='info'
            showIcon/>}
    </OverlayContainer>
));

AgGridOverlay.propTypes = {
    description: PropTypes.string,
    message: PropTypes.string,
    hasData: PropTypes.bool,
    isLoading: PropTypes.bool,
    offsetHeight: PropTypes.number,
};

AgGridOverlay.defaultProps = {
    hasData: false,
    isLoading: false,
    message: 'No records found',
    offsetHeight: 31
};

export default AgGridOverlay;
