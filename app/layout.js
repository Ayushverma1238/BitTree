import "./globals.css";
import SessionWrapper from "@/components/sessionWrapper";
export const metadata = {
  title: "LinkTree",
  description: "This will holds all your saved website url",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>

      <body>
        {children}
      </body>
      </SessionWrapper>
    </html>
  );
}
