import React, { useState } from 'react';
import "./TopButton.scss";

export default function TopButton () {
    const [visible, showBtn] = useState(false);
    const toggleBtnShow = () => {
        const scrollOffset = document.documentElement.scrollTop;
        scrollOffset > 300 ? showBtn(true) : showBtn(false);
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    window.addEventListener('scroll', toggleBtnShow);
    return (
        <button onClick={scrollToTop} className={visible ? "scroll-up fa-solid fa-arrow-up show" : "scroll-up fa-solid fa-arrow-up hide"}  />
    );
}