export default function Footer() {
  return (
    <footer style={{
      marginTop: 'clamp(4rem, 10vw, 12rem)',
      padding: 'clamp(1.25rem, 3vw, 2rem) 1.5rem',
      background: '#ffffff',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          position: 'relative',
        }}>
          {/* Kiri: Copyright */}
          <span style={{
            fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
            color: '#a0a09a',
            whiteSpace: 'nowrap',
            flex: '1',
          }}>
            2026 Copyright information goes here.
          </span>

          {/* Tengah: Circular dots */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            flex: '0 0 auto',
          }}>
            <span style={{ width: 'clamp(10px, 2.5vw, 14px)', height: 'clamp(10px, 2.5vw, 14px)', borderRadius: '50%', background: '#e06c6c', display: 'inline-block' }} />
            <span style={{ width: 'clamp(10px, 2.5vw, 14px)', height: 'clamp(10px, 2.5vw, 14px)', borderRadius: '50%', background: '#e8b84b', display: 'inline-block' }} />
            <span style={{ width: 'clamp(10px, 2.5vw, 14px)', height: 'clamp(10px, 2.5vw, 14px)', borderRadius: '50%', background: '#5cb85c', display: 'inline-block' }} />
          </div>

          {/* Kanan: Designed by */}
          <span style={{
            fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
            color: '#a0a09a',
            whiteSpace: 'nowrap',
            flex: '1',
            textAlign: 'right',
          }}>
            Designed by Nanas
          </span>
        </div>
      </div>
    </footer>
  )
}