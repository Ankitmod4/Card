import { useEffect, useRef } from 'react'
import './App.css'

const COLORS = ['#ff6eb4','#c084fc','#60a5fa','#f9a8d4','#fde68a','#a78bfa','#fbcfe8','#ffffff']
const HEARTS = ['❤️','💕','💗','💖','✨','🌸','💫','🦋']

function rand(min, max) { return Math.random() * (max - min) + min }

export default function App() {
  const glitterRef = useRef(null)

  useEffect(() => {
    const container = glitterRef.current
    if (!container) return

    const particles = []

    function createSparkle() {
      const el = document.createElement('div')
      const size = rand(2, 6)
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const duration = rand(4, 10)
      const delay = rand(0, 2)
      Object.assign(el.style, {
        position: 'absolute',
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
        left: `${rand(0, 100)}%`,
        bottom: `${rand(0, 5)}%`,
        background: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
        opacity: '0',
        animation: `sparkleFloat ${duration}s ${delay}s linear forwards`,
        pointerEvents: 'none',
      })
      container.appendChild(el)
      particles.push(el)
      setTimeout(() => { el.remove() }, (duration + delay) * 1000)
    }

    function createHeart() {
      const el = document.createElement('div')
      const heart = HEARTS[Math.floor(Math.random() * HEARTS.length)]
      const size = rand(10, 22)
      const duration = rand(5, 12)
      const delay = rand(0, 3)
      el.textContent = heart
      Object.assign(el.style, {
        position: 'absolute',
        left: `${rand(0, 100)}%`,
        bottom: `${rand(0, 5)}%`,
        fontSize: `${size}px`,
        opacity: '0',
        animation: `heartFloat ${duration}s ${delay}s linear forwards`,
        pointerEvents: 'none',
      })
      container.appendChild(el)
      particles.push(el)
      setTimeout(() => { el.remove() }, (duration + delay) * 1000)
    }

    // Initial burst
    for (let i = 0; i < 60; i++) {
      setTimeout(createSparkle, rand(0, 3000))
    }

    const sparkleInterval = setInterval(createSparkle, 180)
    const heartInterval = setInterval(createHeart, 750)

    return () => {
      clearInterval(sparkleInterval)
      clearInterval(heartInterval)
      particles.forEach(p => p.remove())
    }
  }, [])

  return (
    <div className="page">
      <div ref={glitterRef} className="glitter-container" aria-hidden="true" />

      <div className="card-wrapper">
        <div className="card">
          <span className="corner-deco tl" aria-hidden="true">✦</span>
          <span className="corner-deco tr" aria-hidden="true">✦</span>
          <span className="corner-deco bl" aria-hidden="true">✦</span>
          <span className="corner-deco br" aria-hidden="true">✦</span>

          <div className="top-icon" aria-label="Love letter">💌</div>
          <p className="to-label">A little something for</p>
          <h1 className="name">Azra</h1>
          <p className="subtitle">— written from the heart —</p>

          <div className="glitter-line" />

         <p className="message">
  Hi <span className="highlight">Yasemin</span>,<br /><br />

I came across your photos recently, and I genuinely thought you looked
really beautiful. That made me curious to know the person behind the smile.<br /><br />

I'm not usually someone who sends messages like this, so this is a little
outside my comfort zone. But I felt that if I didn't say hello, I might
regret not trying.<br /><br />

I would really love to get to know you better.<br />
No pressure, no expectations—just an honest conversation if you're open to it.<br /><br />

And please don't judge me for reaching out like this.
I believe I'm a kind, respectful, and genuine person, and I hope you'll
give me a chance to introduce myself.<br /><br />

If you're interested, I'd be happy to talk and get to know each other,
one conversation at a time. 😊

</p>


          <div className="glitter-line" />

          <div className="signature-block">
            <p className="from-label">with love, always</p>
            <p className="signature">Ankit</p>
            <span className="dev-badge">
              <span className="code-dot" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
