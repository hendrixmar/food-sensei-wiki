import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Food Sensei Wiki',
  description: 'Nutrición y Salud Metabólica - Base de Conocimiento',
  srcDir: '.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Conceptos', link: '/concepts/' },
      { text: 'Fuentes', link: '/sources/' },
      { text: 'GitHub', link: 'https://github.com/hendrikmartina/food_sensei' }
    ],
    sidebar: {
      '/concepts/': [
        {
          text: 'Conceptos',
          items: [
            { text: 'Metabolismo', link: '/concepts/metabolismo' },
            { text: 'Glucosa', link: '/concepts/glucosa' },
            { text: 'Insulina', link: '/concepts/insulina' },
            { text: 'Resistencia a Insulina', link: '/concepts/resistencia-insulina' },
            { text: 'Diabetes Tipo 2', link: '/concepts/diabetes-tipo-2' },
            { text: 'Dieta 3x1', link: '/concepts/dieta-3x1' },
            { text: 'Colesterol', link: '/concepts/colesterol' },
            { text: 'Presión Arterial', link: '/concepts/presion-arterial' },
            { text: 'Inflamación Crónica', link: '/concepts/inflamacion-cronica' },
            { text: 'Neurodegeneración', link: '/concepts/neurodegeneracion' },
            { text: 'Picos de Glucosa', link: '/concepts/picos-glucosa' },
            { text: 'Vinagre', link: '/concepts/vinagre' },
            { text: 'Gluten', link: '/concepts/gluten' },
            { text: 'Vitamina D', link: '/concepts/vitamina-d' },
            { text: 'Magnesio', link: '/concepts/magnesio' }
          ]
        }
      ],
      '/sources/': [
        {
          text: 'Fuentes',
          items: [
            { text: 'Diabetes sin problemas', link: '/sources/diabetes-sin-problemas' },
            { text: 'Cerebro de pan', link: '/sources/cerebro-de-pan' },
            { text: 'La revolución de la glucosa', link: '/sources/revolucion-de-la-glucosa' },
            { text: 'Metabolismo Ultra Poderoso', link: '/sources/metabolismo-ultra-poderoso' }
          ]
        }
      ],
      '/entities/': [
        {
          text: 'Entidades',
          items: [
            { text: 'Frank Suarez', link: '/entities/frank-suarez' },
            { text: 'David Perlmutter', link: '/entities/david-perlmutter' },
            { text: 'Jessie Inchauspé', link: '/entities/jessie-inchauspe' }
          ]
        }
      ],
      '/syntheses/': [
        {
          text: 'Síntesis',
          items: [
            { text: 'Carbohidratos vs Grasas', link: '/syntheses/carbohidratos-vs-grasas' },
            { text: 'Diabetes: Enfoques Múltiples', link: '/syntheses/diabetes-enfoques-multiples' },
            { text: 'Inflamación y Dieta', link: '/syntheses/inflamacion-y-dieta' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hendrikmartina/food_sensei' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'CC BY-SA 4.0',
      copyright: 'Built with VitePress'
    }
  },
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
