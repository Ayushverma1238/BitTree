import "./globals.css";

export const metadata = {
  title: "LinkTree",
  description: "This will holds all your saved website url",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
