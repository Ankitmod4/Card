import { useEffect, useRef } from 'react'
import './App.css'

const COLORS = ['#ff6eb4', '#c084fc', '#60a5fa', '#f9a8d4', '#fde68a', '#a78bfa', '#fbcfe8', '#ffffff']
const HEARTS = ['❤️', '💕', '💗', '💖', '✨', '🌸', '💫', '🦋']

function rand(min, max) {
  return Math.random() * (max - min) + min
}

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

      setTimeout(() => {
        el.remove()
      }, (duration + delay) * 1000)
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

      setTimeout(() => {
        el.remove()
      }, (duration + delay) * 1000)
    }

    for (let i = 0; i < 60; i++) {
      setTimeout(createSparkle, rand(0, 3000))
    }

    const sparkleInterval = setInterval(createSparkle, 180)
    const heartInterval = setInterval(createHeart, 750)

    return () => {
      clearInterval(sparkleInterval)
      clearInterval(heartInterval)
      particles.forEach((p) => p.remove())
    }
  }, [])

  return (
    <div className="background">
      <div className="glitter" ref={glitterRef}></div>

      <div className="card-wrapper">
        <div className="card">
          <span className="corner-deco tl">✦</span>
          <span className="corner-deco tr">✦</span>
          <span className="corner-deco bl">✦</span>
          <span className="corner-deco br">✦</span>

          <div className="top-icon">💌</div>

          <p className="to-label">Для</p>

          <h1 className="name">Катерина 💗</h1>

          <p className="subtitle">— с искренностью —</p>

          <div className="glitter-line" />

          <p className="message">
            Привет, Катерина 💗
            <br /><br />

            Я хочу искренне извиниться за то, что рассказал о том, о чём ты не хотела говорить. Мне жаль, что я мог тебя расстроить или заставить чувствовать себя неловко. Я понимаю, что это была личная тема, и впредь буду уважать твои границы.

            <br /><br />

            Прости меня, пожалуйста, если я причинил тебе боль. Мне бы хотелось начать с тобой дружбу и узнать друг друга лучше. Если ты не против, можем начать нашу дружбу с чистого листа? Но я пойму и приму любое твоё решение.

            <br /><br />

            Ещё раз прости меня, пожалуйста. Я надеюсь, что ты не держишь на меня зла.

            <br /><br />

            С теплом,

            <br /><br />

            <strong>Ankit ❤️</strong>
          </p>

          <div className="glitter-line" />

          <div className="signature-block">
            <p className="from-label">С теплом</p>
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
