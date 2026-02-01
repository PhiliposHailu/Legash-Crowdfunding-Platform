import React from 'react';

export default function ColorPalettePage() {
  return (
    <div className="min-h-screen bg-background p-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="border-b border-muted pb-6">
          <h1 className="text-4xl font-bold text-foreground">Legash Color Palette</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Updated visual guide based on your selection.
          </p>
        </div>

        {/* 1. CORE BRAND COLORS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Core Brand</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <ColorCard 
              name="Primary"
              className="bg-primary text-white"
              hex="#2563eb"
              usage="Main Actions, Links"
            />

            <ColorCard 
              name="Secondary"
              className="bg-secondary text-white"
              hex="#10b981"
              usage="Success, Donations"
            />

             <ColorCard 
              name="Destructive"
              className="bg-destructive text-white"
              hex="#ef4444"
              usage="Errors, Delete"
            />
          </div>
        </section>

        {/* 2. LIGHT ACCENTS (New Additions) */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Light Accents</h2>
          <p className="mb-4 text-muted-foreground">Background tints used to highlight sections without being too bold.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Primary Light */}
            <div className="flex flex-col gap-3">
              <div className="h-32 rounded-xl border border-primary/10 flex items-center justify-center bg-primary-light">
                <span className="text-primary font-bold">Primary Light</span>
              </div>
              <div className="bg-muted/30 p-3 rounded text-sm border border-muted">
                <p><strong>Hex:</strong> #eef5fe</p>
                <code className="text-xs bg-gray-200 px-1 rounded text-black">bg-primary-light</code>
              </div>
            </div>

            {/* Secondary Light */}
            <div className="flex flex-col gap-3">
              <div className="h-32 rounded-xl border border-secondary/10 flex items-center justify-center bg-secondary-light">
                <span className="text-secondary-foreground font-bold text-black/70">Secondary Light</span>
              </div>
              <div className="bg-muted/30 p-3 rounded text-sm border border-muted">
                <p><strong>Hex:</strong> #d0ffbc</p>
                <code className="text-xs bg-gray-200 px-1 rounded text-black">bg-secondary-light</code>
              </div>
            </div>

            {/* Warning Foreground Display */}
            <div className="flex flex-col gap-3">
              <div className="h-32 rounded-xl border border-muted flex items-center justify-center bg-white">
                <span className="text-warning-foreground font-bold text-xl">Warning Text</span>
              </div>
              <div className="bg-muted/30 p-3 rounded text-sm border border-muted">
                <p><strong>Hex:</strong> #d97706</p>
                <code className="text-xs bg-gray-200 px-1 rounded text-black">text-warning-foreground</code>
                <p className="text-xs text-muted-foreground mt-1">Used for icons or text alerts</p>
              </div>
            </div>

          </div>
        </section>

        {/* 3. NEUTRALS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Neutrals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <ColorCard 
              name="Background"
              className="bg-background border border-gray-300 text-foreground"
              hex="#ffffff"
              usage="Main Page Background"
            />

            <ColorCard 
              name="Foreground"
              className="bg-foreground text-background"
              hex="#0f172a"
              usage="Primary Text"
            />

            <ColorCard 
              name="Muted"
              className="bg-muted text-muted-foreground"
              hex="#f1f5f9"
              usage="Secondary Backgrounds"
            />
          </div>
        </section>

      </div>
    </div>
  );
}

// Helper Component to save space
function ColorCard({ name, className, hex, usage }: any) {
  return (
    <div className="flex flex-col gap-3">
      <div className={`h-32 w-full rounded-xl shadow-sm flex items-center justify-center ${className}`}>
        <span className="font-bold">{name}</span>
      </div>
      <div className="bg-muted/30 p-3 rounded text-sm border border-muted">
        <p className="flex justify-between">
            <span className="text-muted-foreground">Hex:</span>
            <span className="font-mono">{hex}</span>
        </p>
        <p className="text-xs text-muted-foreground mt-2 border-t border-muted pt-2">{usage}</p>
      </div>
    </div>
  )
}