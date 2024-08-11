import LeftBarLayout from "@/components/layouts/leftbar-layout";
import {partners} from "@/utils/consts";
import Link from "next/link";

export const metadata = {
  title: "MASTER SIP | Партнеры",
  description: "Строительство домов из SIP панелей в Поволжье",
};


const Page = () => {
  return (
    <LeftBarLayout>
      <div className="page-partners">
        <div className="page-partners__body">
          <h1>Партнеры компании</h1>
          <div className="page-partners__groups">
            {partners.map((item, index) => (
              <div key={index} className="page-partners__group">
                <h3 className="page-partners__title">{item.partnersGroup}</h3>
                <div className="page-partners__list">
                  {item.partnersList.map((partner, index) => {
                    return (
                      <Link key={index} className="page-partners__link" target={"_blank"} href={partner.link}>
                        {partner.icon}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LeftBarLayout>
  );
};

export default Page;
