import ExpandingTabs from './components/ExpandingTabs'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="w-full flex flex-col items-center gap-10">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Expanding Tabs</h1>
            <p className="text-blue-200/80 mt-2">Click a tab to expand the box and reveal content</p>
          </div>

          {/* Component */}
          <ExpandingTabs />

          {/* Footer hint */}
          <p className="text-sm text-blue-300/60">Fully responsive • Smooth transitions • Accessible</p>
        </div>
      </div>
    </div>
  )
}

export default App
