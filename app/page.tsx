'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /home when the application starts
    router.push('/home');
  }, [router]);

  return null; // or any initial setup if needed
};

export default RootPage;
