import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import useClickDrag from '../../hooks/useClickDrag';
import useLayoutState from '../../hooks/useLayoutState';
import useLayoutActions from '../../hooks/useLayoutActions';

const ReSizer = styled.div`
    display: flex;
    cursor: ${(props) => props.horizontal ? 'row-resize' : 'col-resize'};
    height: ${(props) => props.horizontal ? '3px' : '100%'};
    width: ${(props) => props.horizontal ? '100%' : '3px'};
    
    ${(props) => props.horizontal ? 'justify-self: center;' : 'align-self: center;'}
    ${(props) => `border-${props.horizontal ? 'top' : 'right'}: 1px solid ${props.theme.borderColorSplit};`}
    
    &:hover {
        border-width: 3px;
    }
`;

export default React.memo(() => {

    const $element = useRef();

    const actions = useLayoutActions();

    const state = useLayoutState();

    const dragState = useClickDrag($element);

    const isHorizontal = state.orientation === 'horizontal';

    const basis = dragState[isHorizontal ? 'moveDeltaYPercent' : 'moveDeltaXPercent'];

    useEffect(
        () => {
            actions.setBasis(basis);
        },
        [
            basis
        ]
    );

    return (
        <ReSizer
            ref={$element}
            horizontal={isHorizontal}/>
    );
});