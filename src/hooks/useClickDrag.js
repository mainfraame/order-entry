import React, { useCallback, useEffect, useState } from 'react';

export default (ref) => {

    const [state, setState] = useState({
        isMouseDown: false,
        isMoving: false,
        mouseDownPositionX: 0,
        mouseDownPositionY: 0,
        moveDeltaXPercent: 0,
        moveDeltaYPercent: 0
    });

    const onMouseDown = useCallback(
        (e) => {
            if (e.button === 0) {

                e.preventDefault();

                const {clientX, clientY} = (e.changedTouches && e.changedTouches[0]) || e;

                setState(() => ({
                    isMouseDown: true,
                    isMoving: false,
                    mouseDownPositionX: clientX,
                    mouseDownPositionY: clientY,
                    moveDeltaXPercent: 0,
                    moveDeltaYPercent: 0
                }));
            }
        },
        []
    );

    const onMouseUp = useCallback(
        () => {
            if (state.isMouseDown) {
                setState((state) => ({
                    ...state,
                    isMouseDown: false,
                    isMoving: false
                }));
            }
        },
        [
            state.isMouseDown
        ]
    );

    const onMouseMove = useCallback((e) => {
            if (state.isMouseDown) {

                e.preventDefault();

                const {clientX, clientY} = (e.changedTouches && e.changedTouches[0]) || e;

                setState((state) => {

                    const moveDeltaX = clientX - state.mouseDownPositionX;
                    const moveDeltaY = clientY - state.mouseDownPositionY;

                    return {
                        ...state,
                        isMoving: true,
                        mouseDownPositionY: clientY,
                        mouseDownPositionX: clientX,
                        moveDeltaXPercent: (Math.abs(moveDeltaX) / window.innerWidth) * (moveDeltaX > 0 ? 1 : -1),
                        moveDeltaYPercent: (Math.abs(moveDeltaY) / window.innerHeight) * (moveDeltaY > 0 ? 1 : -1)
                    };
                });
            }
        },
        [
            state.isMouseDown
        ]
    );

    useEffect(
        () => {
            if (ref.current) {

                ref.current.addEventListener('mousedown', onMouseDown, false);
                document.addEventListener('mousemove', onMouseMove, false);
                document.addEventListener('mouseup', onMouseUp, false);

                return () => {
                    ref.current.removeEventListener('mousedown', onMouseDown, false);
                    document.removeEventListener('mousemove', onMouseMove, false);
                    document.removeEventListener('mouseup', onMouseUp, false);
                };
            }
        },
        [
            ref.current,
            onMouseDown,
            onMouseMove,
            onMouseUp
        ]
    );

    return state;
}