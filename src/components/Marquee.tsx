export default function Marquee() {
  const items = ['Next.js','·','React','·','TypeScript','·','Framer Motion','·','Tailwind','·','Node.js','·','Figma','·','UI/UX Design','·','Web Animation','·']
  const doubled = [...items, ...items]

  return (
    <section id="marquee">
      <div style={{ padding: '1.25rem 0', overflow: 'hidden', background: '#ffffff' }}>
        <div style={{ display: 'flex', animation: 'marquee 20s linear infinite', whiteSpace: 'nowrap' }}>
          {doubled.map((item, i) => (
            <span
              key={i}
              className="font-mono"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#a0a09a',
                margin: '0 1.25rem'
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}