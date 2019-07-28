import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex: 1;
    flex-direction: ${(props) => props.orientation === 'horizontal' ? 'column' : 'row'};
`;