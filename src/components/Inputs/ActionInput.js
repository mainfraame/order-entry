import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Select } from '@jbuschke/formik-antd';

const SelectInput = styled(Select)`
    .ant-select-selection {
        color: white;
        background-color: ${(props) => props.value === 'Buy' ? props.theme.successColor : props.theme.errorColor};
        border-radius: 4px;
        
        .anticon {
            color: white;
        }
    }
`;

const ActionInput = React.memo((props) => (
    <SelectInput {...props}>
        <Select.Option value='Buy'>Buy</Select.Option>
        <Select.Option value='Sell'>Sell</Select.Option>
    </SelectInput>
));

ActionInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default ActionInput;