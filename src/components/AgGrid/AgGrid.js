import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';

import AgGridContainer from './AgGridContainer';
import AgGridOverlay from './AgGridOverlay';
import agGridConfig from './agGridConfig';

const AgGrid = React.memo((props) => {

    const getRowNodeId = useCallback(
        (data) => data[props.primaryKey],
        [props.primaryKey]
    );

    const onFirstDataRendered = useCallback(
        ({api}) => api.sizeColumnsToFit(),
        []
    );

    return (
        <AgGridContainer
            headerHeight={props.headerHeight}
            rowHeight={props.rowHeight}>
            <AgGridReact
                {...props}
                columnTypes={agGridConfig.columnTypes}
                defaultColDef={agGridConfig.defaultColDef}
                deltaRowDataMode={!!props.primaryKey || props.deltaRowDataMode}
                getRowNodeId={props.primaryKey ? getRowNodeId : undefined}
                icons={agGridConfig.icons}
                onFirstDataRendered={onFirstDataRendered}
                overlayNoRowsTemplate='<span></span>'/>
            <AgGridOverlay
                hasData={!!props.rowData.length}
                isLoading={props.isLoading}
                message={props.noRecordsMessage}
                offsetHeight={props.offsetHeight}/>
        </AgGridContainer>
    );
});

AgGrid.propTypes = {
    animateRows: PropTypes.bool,
    columnDefs: PropTypes.arrayOf(PropTypes.object),
    deltaRowDataMode: PropTypes.bool,
    enableCellChangeFlash: PropTypes.bool,
    headerHeight: PropTypes.number,
    noRecordsMessage: PropTypes.string,
    reactNext: PropTypes.bool,
    rowData: PropTypes.arrayOf(
        PropTypes.object
    )
};

AgGrid.defaultProps = {
    animateRows: true,
    enableCellChangeFlash: true,
    headerHeight: 31,
    isLoading: false,
    reactNext: true,
    rowHeight: 28,
    suppressScrollOnNewData: true
};

export default AgGrid;
