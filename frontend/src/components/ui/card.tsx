// src/components/ui/card.tsx

import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-200 p-4 rounded-t-lg">
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold">{children}</h3>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      {children}
    </div>
  );
}
