export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          const delay = el.dataset.delay ?? '0'
          const dir = el.dataset.dir

          setTimeout(() => {
            if (dir === 'left') el.classList.add('animate-in-left')
            else if (dir === 'right') el.classList.add('animate-in-right')
            else el.classList.add('animate-in')
          }, Number(delay))

          observer.unobserve(el)
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.will-animate, .will-animate-left, .will-animate-right').forEach((el) => observer.observe(el))
}
