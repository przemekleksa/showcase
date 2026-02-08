declare global {
  interface Window {
    dataLayer: any[]
  }
}

interface AnalyticsEvent {
  category: string
  action: string
  label?: string
  value?: number
}

export const trackEvent = ({ category, action, label, value }: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'interaction',
      category,
      action,
      label,
      value,
    })
  } else {
    console.warn('GTM dataLayer not initialized')
  }
}
