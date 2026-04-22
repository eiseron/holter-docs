import { defineConfig, type DefaultTheme } from 'vitepress'
import versions from '../versions.json'

const enSidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: 'Getting Started',
      items: [{ text: 'Overview', link: '/getting-started' }],
    },
    {
      text: 'Monitoring',
      items: [
        { text: 'Overview', link: '/monitoring/' },
        { text: 'Monitors', link: '/monitoring/dashboard' },
        { text: 'New Monitor', link: '/monitoring/new-monitor' },
        { text: 'Monitor Settings', link: '/monitoring/monitor-settings' },
        { text: 'Daily Metrics', link: '/monitoring/daily-metrics' },
        { text: 'Technical Logs', link: '/monitoring/logs' },
        { text: 'Log Detail', link: '/monitoring/log-detail' },
        { text: 'Incident History', link: '/monitoring/incidents' },
        { text: 'Incident Detail', link: '/monitoring/incident-detail' },
        { text: 'Alerts & Incidents', link: '/monitoring/alert-incidents' },
      ],
    },
    {
      text: 'Delivery',
      items: [
        { text: 'Overview', link: '/delivery/' },
        { text: 'Notification Channels', link: '/delivery/notification-channels' },
      ],
    },
  ],
}

const ptSidebar: DefaultTheme.Sidebar = {
  '/pt_BR/': [
    {
      text: 'Primeiros Passos',
      items: [{ text: 'Visão Geral', link: '/pt_BR/getting-started' }],
    },
    {
      text: 'Monitoramento',
      items: [
        { text: 'Visão Geral', link: '/pt_BR/monitoring/' },
        { text: 'Monitores', link: '/pt_BR/monitoring/dashboard' },
        { text: 'Novo Monitor', link: '/pt_BR/monitoring/new-monitor' },
        { text: 'Configurações do Monitor', link: '/pt_BR/monitoring/monitor-settings' },
        { text: 'Métricas Diárias', link: '/pt_BR/monitoring/daily-metrics' },
        { text: 'Logs Técnicos', link: '/pt_BR/monitoring/logs' },
        { text: 'Detalhe do Log', link: '/pt_BR/monitoring/log-detail' },
        { text: 'Histórico de Incidentes', link: '/pt_BR/monitoring/incidents' },
        { text: 'Detalhe do Incidente', link: '/pt_BR/monitoring/incident-detail' },
        { text: 'Alertas & Incidentes', link: '/pt_BR/monitoring/alert-incidents' },
      ],
    },
    {
      text: 'Entrega',
      items: [
        { text: 'Visão Geral', link: '/pt_BR/delivery/' },
        { text: 'Canais de Notificação', link: '/pt_BR/delivery/notification-channels' },
      ],
    },
  ],
}

function versionNav(): DefaultTheme.NavItemWithChildren | null {
  if (versions.length === 0) return null
  const latest = versions[versions.length - 1]
  return {
    text: `${latest} (latest)`,
    items: [...versions]
      .reverse()
      .map((v, i) => ({ text: i === 0 ? `${v} (latest)` : v, link: `/${v}/` })),
  }
}

const versionNavItem = versionNav()

export default defineConfig({
  title: 'Holter',
  titleTemplate: ':title — Holter Docs',
  srcDir: './src',
  outDir: './.vitepress/dist',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
          ...(versionNavItem ? [versionNavItem] : []),
        ],
        sidebar: enSidebar,
      },
    },
    pt_BR: {
      label: 'Português',
      lang: 'pt-BR',
      themeConfig: {
        nav: [
          { text: 'Início', link: '/pt_BR/' },
          { text: 'Primeiros Passos', link: '/pt_BR/getting-started' },
          ...(versionNavItem ? [versionNavItem] : []),
        ],
        sidebar: ptSidebar,
      },
    },
  },

  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/eiseron/holter' }],
    footer: {
      message: 'Released under the AGPL-3.0 License.',
      copyright: 'Copyright © Eiseron',
    },
    search: { provider: 'local' },
  },
})
