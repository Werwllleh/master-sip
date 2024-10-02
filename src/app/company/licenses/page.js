import LeftBarLayout from "@/components/layouts/leftbar-layout";
import React from "react";

export const metadata = {
  title: "MASTER SIP | Лицензии",
  description: "Строительство домов из SIP панелей в Поволжье",
};

const Page = () => {
  return (
    <LeftBarLayout>
      <div className="page-licenses">
        <div className="page-licenses__body">
          <h1>Лицензии</h1>
        </div>
      </div>
    </LeftBarLayout>
  );
};

export default Page;
