import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const CursorDot = styled.div`
  width: 8px;
  height: 8px;
  background: var(--accent); /* Use accent color */
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  transform: translate(-50%, -50%); /* Center the dot */
`;

const CursorRing = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid var(--accent); /* Use accent color */
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: transform 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out, opacity 0.2s ease-in-out;
  transform: translate(-50%, -50%); /* Center the ring */
  opacity: 0.6; /* Make the ring slightly transparent */
`;

const CustomCursor = () => {
  const cursor = useRef(null);
  const ring = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cursor.current || !ring.current) return;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Position the dot directly
      cursor.current.style.left = `${mouseX}px`;
      cursor.current.style.top = `${mouseY}px`;

      // Position the ring with a slight delay/tweening effect
      // Using requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        if (!ring.current) return;
        const ringX = ring.current.getBoundingClientRect().left + ring.current.clientWidth / 2;
        const ringY = ring.current.getBoundingClientRect().top + ring.current.clientHeight / 2;
        const distX = mouseX - ringX;
        const distY = mouseY - ringY;
        
        ring.current.style.left = `${ringX + distX * 0.1}px`; // Move 10% of the distance
        ring.current.style.top = `${ringY + distY * 0.1}px`;
      });

      if (!isVisible) setIsVisible(true);
    };

    const updateCursorState = (e) => {
      const target = e.target;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('input') !== null ||
        target.closest('textarea') !== null;
      
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Hide default cursor
    document.body.style.cursor = 'none';

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', updateCursorState); // Use mouseover for state change
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', updateCursorState);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
    };
  }, [isVisible]);

  // Add style updates based on isPointer state outside the frequently called mousemove
  useEffect(() => {
    if (!cursor.current || !ring.current) return;
    cursor.current.style.opacity = isPointer ? 0.5 : 1;
    ring.current.style.width = isPointer ? '40px' : '30px';
    ring.current.style.height = isPointer ? '40px' : '30px';
    ring.current.style.opacity = isPointer ? 0.8 : 0.6;
  }, [isPointer]);

  if (!isVisible) return null;

  return (
    <>
      <CursorDot ref={cursor} />
      <CursorRing ref={ring} />
    </>
  );
};

export default CustomCursor; 