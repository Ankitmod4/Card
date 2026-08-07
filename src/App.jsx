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

          <p className="to-label">Una carta para</p>

          <h1 className="name">Juliana</h1>

          <p className="subtitle">— escrita con sinceridad —</p>

          <div className="glitter-line" />

          <p className="message">
            Hola, Juliana.
            <br /><br />

            Quiero empezar esta carta pidiéndote perdón si te hice sentir mal.
            Nunca fue mi intención hacerte enojar o lastimarte.

            <br /><br />

            Cuando me pediste dinero, mi respuesta no significaba que no quisiera
            tener un detalle contigo. La verdad es que sentí un poco de miedo y
            de inseguridad. Apenas nos estamos conociendo y, siendo completamente
            sincero, todavía me cuesta enviar dinero a alguien que recién conozco.

            <br /><br />

            Espero que puedas entender que no fue falta de cariño ni de interés,
            sino simplemente una decisión basada en la prudencia.

            <br /><br />

            Quiero que sepas algo importante: nunca me negué a darte un regalo.
            De hecho, me haría mucha ilusión enviarte un regalo bonito elegido
            especialmente para ti. Para mí, un regalo tiene más significado que
            simplemente enviar dinero.

            <br /><br />

            Me gusta hablar contigo y conocer más de ti cada día. No quisiera que
            este malentendido termine con nuestras conversaciones.

            <br /><br />

            Si te hice sentir decepcionada o pensaste que no me importabas,
            te pido perdón de corazón. Mi intención siempre ha sido tratarte con
            respeto, sinceridad y cariño.

            <br /><br />

            Ojalá puedas perdonarme y darme la oportunidad de seguir conociéndote.
            Espero que podamos dejar este momento atrás y seguir hablando con una
            sonrisa.

            <br /><br />

            Gracias por leer esta carta.

            <br /><br />

            Con mucho cariño,

            <br /><br />

            <strong>Ankit ❤️</strong>
          </p>

          <div className="glitter-line" />

          <div className="signature-block">
            <p className="from-label">Con cariño</p>
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
