import { useState, useEffect } from 'react'

function getFromPosition(from) {
  switch (from) {
    case 'bottom':
      return 'top'
    case 'top':
      return 'bottom'
    case 'left':
      return 'right'
    case 'right':
      return 'left'
    default:
      return undefined
  }
}

const defaultProps = {
  from: 'bottom',
  positionOffset: 50,
  delayInMilliseconds: 0,
  durationInMilliseconds: 1200,
}

export const FadeIn = (props) => {
  const { from, positionOffset, delayInMilliseconds, durationInMilliseconds, children } = {
    ...defaultProps,
    ...props,
  }

  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    setTimeout(() => setHasAnimated(true), 10)
  }, [])

  const fromPosition = getFromPosition(from)

  return (
    <div
      style={{
        position: 'relative',
        [fromPosition]: hasAnimated ? 0 : positionOffset,
        opacity: hasAnimated ? 1 : 0,
        transition: `${fromPosition} ${durationInMilliseconds}ms, opacity ${durationInMilliseconds}ms`,
        transitionDelay: `${delayInMilliseconds}ms`,
      }}
    >
      {children}
    </div>
  )
}