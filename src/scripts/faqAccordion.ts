export function initFaqAccordion(openFirstByDefault = false) {
  const triggers = document.querySelectorAll<HTMLElement>('[data-faq-trigger]')

  function closeItem(trigger: HTMLElement) {
    const item = trigger.closest('[data-faq-item]') as HTMLElement
    const content = item.querySelector('[data-faq-content]') as HTMLElement
    const icon = trigger.querySelector('[data-faq-icon]') as HTMLElement | null
    trigger.setAttribute('aria-expanded', 'false')
    content.style.maxHeight = '0'
    if (icon) icon.style.transform = 'rotate(0deg)'
  }

  function openItem(trigger: HTMLElement) {
    const item = trigger.closest('[data-faq-item]') as HTMLElement
    const content = item.querySelector('[data-faq-content]') as HTMLElement
    const icon = trigger.querySelector('[data-faq-icon]') as HTMLElement | null
    trigger.setAttribute('aria-expanded', 'true')
    content.style.maxHeight = `${content.scrollHeight}px`
    if (icon) icon.style.transform = 'rotate(180deg)'
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true'
      triggers.forEach(closeItem)
      if (!isOpen) openItem(trigger)
    })
  })

  if (openFirstByDefault && triggers.length > 0) {
    openItem(triggers[0])
  }
}
