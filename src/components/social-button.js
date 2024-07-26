import React from 'react';
import Link from "next/link";

const SocialButton = ({link, icon, classLink, colored}) => {
  return (
    <Link target="_blank" className={`social-button ${classLink} ${colored ? 'active' : ''}`} href={link}>
      {icon}
    </Link>
  );
};

export default SocialButton;
