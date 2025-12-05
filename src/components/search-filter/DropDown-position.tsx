import React from 'react'

const DropDownPosition = (ref : React.RefObject<HTMLDivElement | null> | React.RefObject<HTMLDivElement> ) => {
    const GetDropDownPosition = () => {
        if(!ref.current){
            return {left: 0, top: 0};
        }

        const rect = ref.current.getBoundingClientRect();
        const DropDownwidth = 240;

        let left = rect.left + window.scrollX;
        const top = rect.bottom + window.scrollY;

        if(left + DropDownwidth > window.innerWidth){
            left = rect.right + window.scrollX - DropDownwidth; 
            
            if (left < 0){
                left = window.innerWidth - DropDownwidth - 16; // 10px padding from left edge
            }// 10px padding from right edge
        }

        if (left < 0) {
            left = 16;

            return { top, left };
        }

    }

    return {GetDropDownPosition};
}

export default DropDownPosition
