import "./globals.css";

export const metadata = {
  title: "Neeraj Thakur | Cybersecurity Portfolio",
  description: "B.Tech CSE Student at Parul University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] antialiased">
        {children}
      </body>
    </html>
  );
}