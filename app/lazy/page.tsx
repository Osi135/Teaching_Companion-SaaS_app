"use client";

import React, { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner';

const LazyBigComponent = dynamic(() => import('@/components/BigComponent'), {
  loading: () => <Spinner />,
});

export default function Page() {
  const [show, setShow] = useState(false);

  return (
    <main>
      <h1>Lazy Loading Example</h1>
      <p>This page demonstrates lazy loading of a big component.</p>
        <button
          onClick={() => setShow(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Show Big Component
        </button>
        {show && (
              <LazyBigComponent />
        )}

    </main>
  );
}
