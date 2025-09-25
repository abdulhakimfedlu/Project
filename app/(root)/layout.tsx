import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2"></Link>
        <Image src="/logo (1).svg" alt="logo"
              width={38} height={32}  />   
              <h2 className='text-primary-100'>Adi Ai</h2>
           </nav>
      {children}
    </div>
  );
};

export default RootLayout;
