import React, { useMemo, useState } from 'react';
import { Tooltip } from 'antd';
import { format } from 'date-fns';
import { withTheme } from 'styled-components';

import AgGrid from '../AgGrid/AgGrid';
import AgGridTitle from '../AgGrid/AgGridTitle';

import useOrderEntryState from '../../hooks/useOrderEntryState';

export default withTheme(
    React.memo((props) => {

        const {isLoading, rowData} = useOrderEntryState();

        const [columnDefs] = useState([
            {
                headerName: 'Action',
                headerClass: 'text-center',
                cellClass: 'text-center',
                field: 'action',
                cellStyle: ({value}) => ({
                    backgroundColor: value === 'Buy' ?
                        props.theme.successColor :
                        props.theme.errorColor,
                    color: 'white'
                })
            },
            {
                headerName: 'Symbol',
                field: 'symbol'
            },
            {
                headerName: 'Qty',
                field: 'qty',
                type: 'number'
            },
            {
                headerName: 'Order Type',
                field: 'orderType'
            },
            {
                headerName: 'TIF',
                field: 'tif'
            },
            {
                headerName: 'Price',
                field: 'price',
                type: 'price'
            },
            {
                headerName: 'Stop Price',
                field: 'stopPrice',
                type: 'price'
            },
            {
                headerName: 'Comment',
                field: 'comment',
                cellRendererFramework: ({value}) => (
                    value ?
                        <Tooltip title={value}>
                            <span>{value}</span>
                        </Tooltip> :
                        null
                )
            }
        ]);

        const lastUpdated = useMemo(
            () => format(new Date(), 'MM/DD/YYYY hh:mm:ss A'),
            [rowData]
        );

        return (
            <>
                <AgGridTitle
                    title='Order Blotter'
                    lastUpdated={lastUpdated}/>
                <AgGrid
                    columnDefs={columnDefs}
                    isLoading={isLoading}
                    primaryKey='id'
                    rowData={rowData}/>
            </>
        );
    })
);