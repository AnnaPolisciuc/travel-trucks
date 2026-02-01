'use client';

import { useState } from 'react';

interface TabsProps {
  features: React.ReactNode;
  reviews: React.ReactNode;
}

export default function Tabs({ features, reviews }: TabsProps) {
  const [activeTab, setActiveTab] = useState<'features' | 'reviews'>('features');

  return (
    <section>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <button
          onClick={() => setActiveTab('features')}
          style={{
            cursor: 'pointer',
            fontWeight: activeTab === 'features' ? 'bold' : 'normal',
          }}
        >
          Features
        </button>

        <button
          onClick={() => setActiveTab('reviews')}
          style={{
            cursor: 'pointer',
            fontWeight: activeTab === 'reviews' ? 'bold' : 'normal',
          }}
        >
          Reviews
        </button>
      </div>

      <div>
        {activeTab === 'features' ? features : reviews}
      </div>
    </section>
  );
}
