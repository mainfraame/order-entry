import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'antd';
import styled from 'styled-components';

const Title = styled(PageHeader)`
    .ant-page-header-heading {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        width: 100%;
    }
`;

const SubTitle = styled.small`
    color: ${(props) => props.theme.primary5};
    margin-right: ${(props) => props.theme.spacing(1)};
`;

const AgGridTitle = React.memo((props) => (
    <Title
        title={props.title}
        subTitle={
            <>
                <SubTitle>Last Updated</SubTitle>
                <small>{props.lastUpdated}</small>
            </>
        }/>
));

AgGridTitle.propTypes = {
    title: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired
};

export default AgGridTitle;