import "../styles/index.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "MASTER SIP | Главная",
  description: "Строительство домов из SIP панелей в Поволжье",
};

export default function RootLayout({children}) {

  return (
    <html lang="ru">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
    <body>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}
