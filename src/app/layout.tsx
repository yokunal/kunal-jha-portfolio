import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kunal Jha | Founder @ Zenvix Solutions & AI Systems Architect",
  description:
    "Portfolio of Kunal Jha - Founder of Zenvix Solutions (www.zenvix.solutions). AI Systems Engineer building autonomous agent swarms, high-performance Rust engines, and Google Cloud automations.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%2300D4AA' rx='15' width='100' height='100'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-size='40' font-weight='bold' fill='%230a0a0a'>KJ</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700,900&f[]=cabinet-grotesk@500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
