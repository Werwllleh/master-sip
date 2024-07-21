"use client";
import { usePathname } from 'next/navigation'


const Leftbar = () => {

  const pathname = usePathname()
  console.log(pathname)


  return (
    <div >
      leftbar
    </div>
  );
};

export default Leftbar;
