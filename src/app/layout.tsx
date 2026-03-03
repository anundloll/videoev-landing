import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VideoEV — Premium Video Advertising at EV Charging Stations",
  description: "VideoEV is a video advertising network that reaches high-income EV drivers during their 30-minute charging session across kiosk, mobile, and in-car screens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
