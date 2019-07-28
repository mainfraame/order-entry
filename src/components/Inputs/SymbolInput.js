import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from '@jbuschke/formik-antd';

export const symbolDataSource = [
    'AAPL',
    'AMZN',
    'EBAY',
    'FB',
    'GOOGL',
    'MMM',
    'MSFT',
    'NFLX',
    'TWTR',
    'VZ'
];

const SymbolInput = React.memo((props) => {

    const filterOption = useCallback(
        (text, {props: {children}}) => (
            children.includes(text.toUpperCase())
        ),
        []
    );

    return (
        <AutoComplete
            backfill
            dataSource={symbolDataSource}
            filterOption={filterOption}
            name={props.name}
            notFoundContent={props.notFoundContent}
            placeholder={props.placeholder}/>
    );
});

SymbolInput.propTypes = {
    name: PropTypes.string.isRequired,
    notFoundContent: PropTypes.string,
    placeholder: PropTypes.string
};

SymbolInput.defaultProps = {
    notFoundContent: 'Not Found',
    placeholder: '< Enter Symbol >'
};

export default SymbolInput;