import type { Metadata } from "next";
import "./globals.css";
import React from 'react';

const metadata: Metadata = {
  title: "家計簿",
  description: "家計簿アプリです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ja">
      <body
        className="antialiased"
      >
        <div className="w-full h-dvh">
          {children}
        </div>
      </body>
    </html>
  );
}
