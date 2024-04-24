import React, { useState, useEffect } from "react";
import "./scrolltotop.css";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        };
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {showScrollTopButton && <FaAngleDoubleUp size={45}className="top-btn-position" onClick={scrollTop} />}
        </div>
    );
};

export default ScrollToTop;
