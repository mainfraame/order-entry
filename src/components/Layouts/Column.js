import styled from 'styled-components';

export default styled.div`
   display: flex;
   flex-direction: column;
   padding: ${(props) => props.theme.spacing(2)};
   min-width: 10px;
   ${(props) => props.basis ? `flex-basis: calc(${props.basis * 100}% - 3px);` : 'flex-grow: 1;'}
`;