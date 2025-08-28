import React from 'react'
import { useTranslation } from 'react-i18next'
import { Globe, ArrowRight } from 'lucide-react'

const LangSwitcher = () => {
  const { i18n, t } = useTranslation()
  const langs = ['en', 'pt', 'es']
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5" aria-hidden="true" />
      {langs.map(code => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={`px-2 py-1 rounded-md text-sm border ${i18n.language === code ? 'bg-black text-white' : 'bg-white text-gray-700'}`}
          aria-label={`Switch to ${code}`}
        >
          {t(`lang.${code}`)}
        </button>
      ))}
    </div>
  )
}

export default function App () {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="w-full sticky top-0 bg-white/80 backdrop-blur border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="SkunkWorks Projects" className="h-10 w-10 object-contain" />
            <span className="font-bold">SkunkWorks Projects</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:underline">{t('nav.services')}</a>
            <a href="#contact" className="hover:underline">{t('nav.contact')}</a>
            <LangSwitcher />
          </nav>
          <div className="md:hidden"><LangSwitcher /></div>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6 bg-gradient-to-br from-gray-100 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">{t('hero.subtitle')}</p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-black text-white">
            {t('hero.cta')} <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 border">
            {t('cta.primary')}
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{t('services.heading')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{t('services.websites_title')}</h3>
            <p>{t('services.websites_desc')}</p>
          </div>
          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{t('services.landing_title')}</h3>
            <p>{t('services.landing_desc')}</p>
          </div>
          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{t('services.ecom_title')}</h3>
            <p>{t('services.ecom_desc')}</p>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('seo.heading')}</h2>
          <p className="max-w-3xl mx-auto mb-10 text-lg">{t('seo.intro')}</p>
          <div className="grid md:grid-cols-4 gap-6 text-left max-w-5xl mx-auto">
            <div className="border rounded-2xl p-6 shadow-sm"><p>• {t('seo.benefit1')}</p></div>
            <div className="border rounded-2xl p-6 shadow-sm"><p>• {t('seo.benefit2')}</p></div>
            <div className="border rounded-2xl p-6 shadow-sm"><p>• {t('seo.benefit3')}</p></div>
            <div className="border rounded-2xl p-6 shadow-sm"><p>• {t('seo.benefit4')}</p></div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{t('cta.primary')}</h2>
          <p className="mb-6">{t('hero.subtitle')}</p>
          <a href="mailto:miguel.melo@skunkworks-projects.com" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-black text-white">
            {t('cta.secondary')} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 text-center">
        <p className="mb-2">{t('footer.copy')}</p>
        <p className="text-sm">{t('footer.note')}</p>
      </footer>
    </div>
  )
}
