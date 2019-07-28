import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { InputNumber } from '@jbuschke/formik-antd';

import { formatThousandsPlace, parseNumber } from '../../utils/number.utils';

const NumberInput = React.memo((props) => {

    const formatter = useCallback(
        (value) => (
            `${props.prefix ? `${props.prefix} ` : ''}${formatThousandsPlace(value)}`
        ),
        [
            props.prefix
        ]
    );

    return (
        <InputNumber
            formatter={formatter}
            name={props.name}
            parser={parseNumber}
            precision={props.precision}/>
    );
});

NumberInput.propTypes = {
    name: PropTypes.string.isRequired,
    precision: PropTypes.number,
    prefix: PropTypes.oneOf([
        '$'
    ])
};

NumberInput.defaultProps = {
    precision: 0
};

export default NumberInput;
