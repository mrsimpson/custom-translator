import React, { useCallback, useRef } from 'react';
import { useSlot } from 'react-signal-slot';

const OverScroll = () => {
    const scrollToTopRef = useRef(0);
    const overscrollEle = useRef(null);
    const listenerRef = useRef(() => {
        if (window.scrollY === scrollToTopRef.current) { return; }

        const overscrolHeight = overscrollEle.current.offsetHeight;
        const scrollDistance = document.documentElement.offsetHeight - window.scrollY - document.documentElement.clientHeight
        if (scrollDistance > overscrolHeight) {
            overscrollEle.current.style.paddingBottom = '0px';
            window.removeEventListener('scroll', listenerRef.current);
        }
        else {
            overscrollEle.current.style.paddingBottom = `${overscrolHeight - scrollDistance}px`;
        }
    });

    const onItemClick = useCallback((scrollId) => {
        window.removeEventListener('scroll', listenerRef.current);
        overscrollEle.current.style.paddingBottom = '0px';

        let { offsetTop: top } = document.querySelector(`#${scrollId}`);
        top -= 56;
        let flag = false;

        if (top + document.documentElement.clientHeight > document.documentElement.offsetHeight) {
            flag = true;
        }

        if (flag) {
            const newScrollTop = top + document.documentElement.clientHeight - document.documentElement.offsetHeight;
            overscrollEle.current.style.paddingBottom = `${newScrollTop}px`;
            window.addEventListener('scroll', listenerRef.current);
            scrollToTopRef.current = newScrollTop;
        }

        window.scrollTo({ top });
    }, []);

    useSlot('menu-item-click', onItemClick);

    return (
        <div ref={overscrollEle}></div>
    );
};

export default OverScroll;