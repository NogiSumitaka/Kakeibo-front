import SideMenu from '@/components/SideMenu';
import React from 'react';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <div className='bg-green-200'>
        <SideMenu />
        <div className="flex">
          <div className="ml-[201px] h-dvh"></div>
          {children}
        </div>
      </div>
    </>
  );
}
