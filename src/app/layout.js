import "../styles/index.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "MASTER SIP",
  description: "Строительство домой из SIP панелей",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
