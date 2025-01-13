import React from 'react';

export default function Stats() {
  const stats = [
    { value: "12K+", label: "Investments" },
    { value: "10K+", label: "International" },
    { value: "12K+", label: "Financial" },
  ]

  return (
    <div className="mt-12 grid grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="space-y-2">
          <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
      <div className="col-span-3 mt-4">
        <p className="text-sm text-muted-foreground">Investment Start from $500</p>
      </div>
    </div>
  )
}

