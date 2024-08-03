'use client';
import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import {Modal} from "antd";
import {CALL, QUESTION, SMALL} from "@/utils/consts";
import FormQuestion from "@/components/forms/form-question";
import FormCall from "@/components/forms/form-call";
import {getScrollbarWidth} from "@/utils/functions";


const BubbleButton = ({children, size, link, target, type, onClick, ...props}) => {

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
        {id: now, left: bubbleX, top: bubbleY},
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

  useEffect(() => {
    const header = document.querySelector('.header');

    if (isModalOpen) {
      header.style.paddingRight =  `${getScrollbarWidth()}px`;
    } else {
      setTimeout(() => {
        header.style.paddingRight = '';
      }, 255);
    }


  }, [isModalOpen]);

  return (
    <>
      {
        link ? (
          <Link target={target ? target : ''} href={link} ref={bubbleBtn} onMouseOver={mouseMove} className={`bubble__button ${size ? size : SMALL}`}>
            {children}
            {bubbles.map(bubble => (
              <span
                key={bubble.id}
                className="bubble"
                style={{left: `${bubble.left}px`, top: `${bubble.top}px`}}
              />
            ))}
          </Link>
        ) : (
          <button onClick={(e) => showModal(e)} ref={bubbleBtn} data-modal={type} onMouseOver={mouseMove}
                  className={`bubble__button ${size ? size : SMALL}`}>
            {children}
            {bubbles.map(bubble => (
              <span
                key={bubble.id}
                className="bubble"
                style={{left: `${bubble.left}px`, top: `${bubble.top}px`}}
              />
            ))}
          </button>
        )
      }
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="modal-form">
          <div className="modal-form__body">
            {type === QUESTION && <FormQuestion/>}
            {type === CALL && <FormCall/>}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BubbleButton;
