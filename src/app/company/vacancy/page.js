import React from 'react';
import LeftBarLayout from "@/components/layouts/leftbar-layout";

const Page = () => {
  return (
    <LeftBarLayout>
      <div className="page-vacancy">
        <div className="page-vacancy__body">
          <h1>Вакансии компании</h1>
        </div>
      </div>
    </LeftBarLayout>
  );
};

export default Page;
