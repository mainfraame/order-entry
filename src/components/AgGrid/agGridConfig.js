import React from 'react';
import ReactDOM from 'react-dom/server';
import styled from 'styled-components';
import { Icon } from 'antd';

import { formatThousandsPlace, formatPrecision } from '../../utils/number.utils';

const AgIcon = styled(Icon)`
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
`;

export default {
    columnTypes: {
        number: {
            headerClass: 'text-right',
            cellClass: ['text-right', 'price'],
            valueFormatter: ({value}) => (
                formatThousandsPlace(
                    formatPrecision(value, 0)
                )
            )
        },
        price: {
            headerClass: 'text-right',
            cellClass: ['text-right', 'price'],
            valueFormatter: ({value}) => (
                formatThousandsPlace(
                    formatPrecision(value, 2)
                )
            )
        }
    },
    defaultColDef: {
        cellClass: ['_default_'],
        sortable: true,
        resizable: true
    },
    icons: {
        sortAscending: ReactDOM.renderToString(<AgIcon type='up'/>),
        sortDescending: ReactDOM.renderToString(<AgIcon type='down'/>)
    }
};