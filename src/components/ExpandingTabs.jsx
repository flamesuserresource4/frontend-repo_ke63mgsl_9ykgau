import { useState } from 'react'

const tabsData = [
  {
    id: 'overview',
    label: 'Overview',
    content: (
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">Welcome</h3>
        <p className="text-blue-100/90">
          This box expands to reveal content when you pick a tab. It collapses back when you deselect.
        </p>
        <p className="text-blue-100/80">
          Smooth transitions, keyboard-accessible tabs, and a clean, modern look using Tailwind.
        </p>
      </div>
    ),
  },
  {
    id: 'details',
    label: 'Details',
    content: (
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">Details</h3>
        <ul className="list-disc pl-5 text-blue-100/90 space-y-1">
          <li>Click a tab to expand</li>
          <li>Click the same tab again to collapse</li>
          <li>Switching tabs keeps the box expanded and swaps content</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'examples',
    label: 'Examples',
    content: (
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">Examples</h3>
        <p className="text-blue-100/90">Use this pattern for FAQs, settings, product specs, or onboarding tips.</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-800/60 border border-blue-500/20 rounded-lg p-3 text-blue-100/90">FAQ</div>
          <div className="bg-slate-800/60 border border-blue-500/20 rounded-lg p-3 text-blue-100/90">Settings</div>
          <div className="bg-slate-800/60 border border-blue-500/20 rounded-lg p-3 text-blue-100/90">Specs</div>
          <div className="bg-slate-800/60 border border-blue-500/20 rounded-lg p-3 text-blue-100/90">Onboarding</div>
        </div>
      </div>
    ),
  },
]

export default function ExpandingTabs() {
  const [active, setActive] = useState(null)

  const onSelect = (id) => {
    setActive((prev) => (prev === id ? null : id))
  }

  const isExpanded = Boolean(active)

  return (
    <div className="w-full max-w-2xl">
      <div className="bg-slate-900/60 backdrop-blur-md border border-blue-500/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Tabs */}
        <div role="tablist" aria-label="Expanding tabs" className="flex gap-2 p-2 bg-slate-900/60">
          {tabsData.map((t) => {
            const selected = active === t.id
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                id={`tab-${t.id}`}
                onClick={() => onSelect(t.id)}
                className={
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all ' +
                  (selected
                    ? 'bg-blue-600 text-white shadow hover:bg-blue-600'
                    : 'bg-slate-800/60 text-blue-100/80 hover:text-white hover:bg-slate-800')
                }
              >
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Expanding container */}
        <div
          className={
            'grid transition-[grid-template-rows] duration-500 ease-out ' +
            (isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')
          }
        >
          <div className="overflow-hidden">
            <div
              className={
                'p-6 md:p-8 bg-slate-900/50 border-t border-blue-500/10 ' +
                'opacity-0 translate-y-2 transition-all duration-300 ' +
                (isExpanded ? 'opacity-100 translate-y-0' : '')
              }
            >
              {tabsData.map((t) => (
                <div
                  key={t.id}
                  role="tabpanel"
                  id={`panel-${t.id}`}
                  aria-labelledby={`tab-${t.id}`}
                  hidden={active !== t.id}
                >
                  {t.content}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Collapsed hint */}
        {!isExpanded && (
          <div className="px-4 py-3 text-center text-blue-200/70 text-sm">
            Pick a tab to expand
          </div>
        )}
      </div>
    </div>
  )
}
