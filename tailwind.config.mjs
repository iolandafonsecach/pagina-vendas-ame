/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        bg:           '#F2EEE7',
        surface:      '#D8CBBE',
        primary:      '#B89A6A',
        'primary-hover': '#9e8358',
        secondary:    '#8A5A44',
        text:         '#3E2C24',
        muted:        '#9A8070',
        border:       'rgba(62, 44, 36, 0.12)',
        success:      '#7A9E7E',
        error:        '#C0604A',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Sora', 'ui-sans-serif', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        btn:   '8px',
        card:  '16px',
        input: '8px',
        img:   '12px',
        badge: '6px',
      },
      boxShadow: {
        sm:  '0 2px 8px rgba(62, 44, 36, 0.08)',
        md:  '0 8px 24px rgba(62, 44, 36, 0.12)',
        lg:  '0 16px 48px rgba(62, 44, 36, 0.16)',
        cta: '0 8px 24px rgba(184, 154, 106, 0.35)',
        glow:'0 0 24px rgba(184, 154, 106, 0.40)',
      },
    },
  },
}
