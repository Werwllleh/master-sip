'use client';
import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import {QUESTION} from "@/utils/consts";
import {Modal} from "antd";

const BubbleButton = ({children, size, link, type, click}) => {

  const bubbleBtn = useRef();
  const lastBubbleTimeRef = useRef(Date.now());
  const [bubbles, setBubbles] = useState([]);

  const mouseMove = (e) => {
    const now = Date.now();
    const timeSinceLastBubble = now - lastBubbleTimeRef.current;

    if (timeSinceLastBubble > 250) { // 100ms delay between bubbles
      if (bubbles.length >= 10) {
        setBubbles([])
      }
      lastBubbleTimeRef.current = now;

      const rect = bubbleBtn.current.getBoundingClientRect();
      const bubbleX = e.clientX - rect.left;
      const bubbleY = e.clientY - rect.top;

      setBubbles((prevBubbles) => [
        ...prevBubbles,
        { id: now, left: bubbleX, top: bubbleY },
      ]);
    }
  };

  useEffect(() => {
    if (bubbles.length > 0) {
      const timer = setTimeout(() => {
        setBubbles(prevBubbles => prevBubbles.slice(1));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [bubbles]);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {
        link ? (
          <Link href={link} ref={bubbleBtn} onMouseOver={mouseMove} className={`bubble__button ${size ? size : 'small'}`}>
            {children}
            {bubbles.map(bubble => (
              <span
                key={bubble.id}
                className="bubble"
                style={{ left: `${bubble.left}px`, top: `${bubble.top}px` }}
              />
            ))}
          </Link>
        ) : (
          <button onClick={showModal} ref={bubbleBtn} data-modal={type} onMouseOver={mouseMove} className={`bubble__button ${size ? size : 'small'}`}>
            {children}
            {bubbles.map(bubble => (
              <span
                key={bubble.id}
                className="bubble"
                style={{ left: `${bubble.left}px`, top: `${bubble.top}px` }}
              />
            ))}
          </button>
        )
      }
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default BubbleButton;
