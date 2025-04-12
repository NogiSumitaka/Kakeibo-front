"use client";

import type { Metadata } from "next";
import "./globals.css";
import React from 'react';
import SideMenu from "@/components/SideMenu";

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
        <div className="w-full h-dvh bg-green-100">
          <SideMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
