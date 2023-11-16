import React from 'react';
import { useState, useEffect } from 'react';

// Custom Hook
export function useMobileScreen():boolean {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    return isMobile;
}