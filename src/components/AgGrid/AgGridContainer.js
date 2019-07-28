import styled from 'styled-components';

export default styled.div`
    flex: 1 1;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
    
    & > div:first-of-type {
        display: flex;
        overflow: hidden;
    
      & > div:first-of-type {
        transition: width 250ms cubic-bezier(.4, 0, .2, 1);
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
      }
    }
   
    .ag-header-cell,
    .ag-header-group-cell {
      line-height: ${(props) => props.headerHeight - 2}px;
      padding-left: 12px;
      padding-right: 12px;
      font-weight: 500;
    }
    
    .ag-cell {
      line-height: ${(props) => props.rowHeight - 3}px;
      padding-left: 11px;
      padding-right: 11px;
    }
    
    .ag-cell .ag-react-container {
      display: flex;
    
      & > div {
        width: 100%;
      }
      
      a, button, span {
        text-transform: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
`;
