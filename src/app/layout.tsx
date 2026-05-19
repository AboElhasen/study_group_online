
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Providers } from "./components/providers";
import { AuthGuard } from "./components/AuthGuard";
import { getServerSession } from "next-auth";

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="ar" dir="ltr">
      <head> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
        <link rel="manifest" href="/manifest.json"/>
      </head>
      <body>
        <Providers>
          <Navbar/>
          <main>{children}</main>
        <Footer/>
         </Providers>
      </body>
    </html>
  );
}