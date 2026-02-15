
import SessionWrapper from "@/components/sessionWrapper";
import "./globals.css";
// import Navbar from "@/components/Navbar";



export const metadata = {
  title: "LinkTree",
  description: "This will holds all your saved website url",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
        {/* <Navbar/> */}

        {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
