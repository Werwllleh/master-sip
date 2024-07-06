import React from 'react';
import Link from "next/link";

const SocialButton = ({link, icon, classLink}) => {
  return (
    <Link target="_blank" className={`social-button ${classLink}`} href={link}>
      {icon}
    </Link>
  );
};

export default SocialButton;
