const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: '0px 0px -32px 0px'
}

const getStaggerStep = (): number => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return 0
  const mobile = window.matchMedia('(max-width: 767px)').matches
  return mobile ? 45 : 80
}

const applyStagger = (group: HTMLElement): void => {
  const step = getStaggerStep()
  Array.from(group.children).forEach((child, index) => {
    if (child instanceof HTMLElement) {
      child.style.transitionDelay = `${index * step}ms`
    }
  })
}

export const initScrollReveal = (): void => {
  if (typeof IntersectionObserver === 'undefined') return

  document.documentElement.classList.add('js-anim')

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      const target = entry.target as HTMLElement
      target.classList.add('is-visible')
      observer.unobserve(target)
    }
  }, OBSERVER_OPTIONS)

  const observe = (element: HTMLElement): void => {
    if (element.dataset.revealObserved === 'true') return
    element.dataset.revealObserved = 'true'
    if (element.classList.contains('reveal-group')) {
      applyStagger(element)
    }
    observer.observe(element)
  }

  const scan = (scope: ParentNode = document): void => {
    scope
      .querySelectorAll<HTMLElement>('.reveal, .reveal-group')
      .forEach(observe)
  }

  scan()

  const mutationObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue
        if (node.matches('.reveal, .reveal-group')) observe(node)
        scan(node)
      }
    }
  })

  mutationObserver.observe(document.body, { childList: true, subtree: true })
}