/**
 * Layout E — "Asymmetric Diagonal"
 * Inspired by: GardenView, Solarva, Gainlove, Charius
 * Asymmetric hero with form/CTA overlay, diagonal section dividers,
 * overlapping card sections, horizontal scrolling testimonials
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Phone,
  WhatsappLogo,
  Quotes,
  CheckCircle,
  ShieldCheck,
  UsersThree,
  Trophy,
  Envelope,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import HeroCarousel from '../components/HeroCarousel';
import siteData from '../data/siteData';
import iconMap from '../data/iconMap';

const statIcons = [Trophy, Star, ShieldCheck, UsersThree];

function Home() {
  const { business, hero, stats, servicesPreview, featuredProjects, whyChooseUs, homeTestimonials, homeCta } = siteData;

  return (
    <PageTransition>
      {/* Hero — full-width with diagonal divider */}
      <HeroCarousel
        images={hero.backgroundImages}
        backgroundImage={hero.backgroundImage}
        backgroundAlt={hero.backgroundAlt}
        overlay="left"
        className="min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-24 lg:pt-0 lg:pb-0 w-full">
          <div className="max-w-2xl overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6 sm:mb-8"
            >
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">{hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-6"
            >
              {hero.titleParts.map((part, i) =>
                part.highlight ? (
                  <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">{part.text}</span>
                ) : (
                  <React.Fragment key={i}>{part.text}</React.Fragment>
                )
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-sm sm:text-lg text-white/60 leading-relaxed mb-8 sm:mb-10 max-w-lg"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <Link to="/contact" className="btn-primary text-sm sm:text-base">
                {hero.ctaPrimary} <ArrowRight size={18} />
              </Link>
              <a href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText || '')}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all">
                <WhatsappLogo size={18} weight="fill" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 sm:mt-12 flex items-center gap-4 sm:gap-6 flex-wrap"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} weight="fill" className={i < business.ratingRounded ? 'text-gold-400' : 'text-gold-400/30'} />
                ))}
                <span className="text-white/60 text-xs sm:text-sm ml-2">{business.rating}/5</span>
              </div>
              <div className="h-5 w-px bg-white/20 hidden sm:block" />
              <span className="text-white/60 text-xs sm:text-sm">{business.reviewCount}+ reviews</span>
            </motion.div>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 80L1440 0V80H0Z" className="fill-white" />
          </svg>
        </div>
      </HeroCarousel>

      {/* Stats — overlapping cards */}
      <section className="relative -mt-6 z-10 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const IconComp = statIcons[index] || Trophy;
              return (
                <SectionReveal key={stat.label} delay={index * 0.1}>
                  <div className="bg-white rounded-xl shadow-lg border border-earth-100 p-5 text-center hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300">
                    <IconComp size={24} className="text-gold-500 mx-auto mb-2" weight="fill" />
                    <div className="text-2xl sm:text-3xl font-bold text-navy-900">{stat.number}</div>
                    <div className="text-xs text-steel-500 mt-1">{stat.label}</div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services — cards with numbered badges */}
      <section className="section-padding bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
              <div>
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Our Expertise</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-3">
                  Services We Provide
                </h2>
              </div>
              <p className="text-steel-500 leading-relaxed">
                From initial consultation to final handover, we deliver end-to-end solutions with uncompromising quality and attention to detail.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesPreview.map((service, index) => {
              const IconComp = iconMap[service.iconName] || iconMap.Buildings;
              return (
                <SectionReveal key={service.title} delay={index * 0.08}>
                  <div className="group relative bg-white border-2 border-earth-100 hover:border-gold-500 rounded-2xl p-7 transition-all duration-300 h-full">
                    {/* Numbered badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center mb-5">
                      <IconComp size={24} className="text-gold-600" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h3>
                    <p className="text-steel-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <Link to="/services" className="inline-flex items-center gap-1 text-gold-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects — asymmetric grid with diagonal bg */}
      <section className="relative section-padding bg-earth-50 overflow-hidden">
        {/* Diagonal accent */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 0L1440 60V0H0Z" className="fill-white" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Our Work</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">Featured Projects</h2>
            </div>
          </SectionReveal>

          {/* Asymmetric grid: 2 + 1 stacked */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <SectionReveal key={project.title} delay={index * 0.15}>
                <Link to="/projects" className="group block relative rounded-2xl overflow-hidden aspect-[3/2]">
                  <img src={project.image} alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-gold-500 rounded-full" />
                      <span className="text-gold-400 text-xs font-semibold uppercase">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
          {featuredProjects[2] && (
            <SectionReveal delay={0.3}>
              <Link to="/projects" className="group block relative rounded-2xl overflow-hidden aspect-[21/9]">
                <img src={featuredProjects[2].image} alt={featuredProjects[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-gold-400 text-xs font-semibold uppercase">{featuredProjects[2].category}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{featuredProjects[2].title}</h3>
                </div>
                <div className="absolute bottom-0 right-0 p-8">
                  <span className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-5 py-2 rounded-full font-semibold text-sm">
                    View All Projects <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </SectionReveal>
          )}
        </div>
      </section>

      {/* Why Choose Us — with image overlap */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="right">
              <div className="relative">
                {/* Main image */}
                <img
                  src={whyChooseUs.image}
                  alt={whyChooseUs.imageAlt}
                  className="rounded-2xl w-full object-cover aspect-[4/5]"
                />
                {/* Floating overlapping image (uses project image) */}
                {featuredProjects[0] && (
                  <div className="absolute -bottom-8 -right-8 w-2/5 rounded-xl overflow-hidden border-4 border-white shadow-xl hidden sm:block">
                    <img src={featuredProjects[0].image} alt="" className="w-full aspect-square object-cover" />
                  </div>
                )}
                {/* Experience float badge */}
                <div className="absolute top-6 -left-4 bg-gold-500 text-white px-5 py-3 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">{whyChooseUs.experienceYears}</div>
                  <div className="text-xs font-medium text-white/80">{whyChooseUs.experienceLabel}</div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="left">
              <div>
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-8">
                  {whyChooseUs.titleParts.map((part, i) =>
                    part.highlight ? (
                      <span key={i} className="text-gold-600">{part.text}</span>
                    ) : (
                      <React.Fragment key={i}>{part.text}</React.Fragment>
                    )
                  )}
                </h2>

                <div className="space-y-5">
                  {whyChooseUs.points.map((item, i) => (
                    <div key={item.title} className="flex gap-4 group">
                      <div className="w-10 h-10 bg-gold-500/10 group-hover:bg-gold-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                        <CheckCircle size={20} weight="fill" className="text-gold-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-900 mb-1">{item.title}</h4>
                        <p className="text-steel-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonials — horizontal scroll */}
      <section className="section-padding bg-navy-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-gold-400 text-sm font-semibold uppercase tracking-wider">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">What clients say about us</h2>
              <div className="flex items-center justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} weight="fill" className={i < business.ratingRounded ? 'text-gold-400' : 'text-gold-400/30'} />
                ))}
                <span className="text-white/50 text-sm ml-2">{business.rating} from {business.reviewCount} reviews</span>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Scroll row */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-5 px-4 sm:px-8 lg:px-16 pb-4" style={{ width: 'max-content' }}>
            {homeTestimonials.map((item, index) => (
              <SectionReveal key={item.name} delay={index * 0.1}>
                <div className="w-[320px] sm:w-[380px] bg-white/5 border border-white/10 rounded-2xl p-7 shrink-0 backdrop-blur-sm">
                  <Quotes size={28} weight="fill" className="text-gold-500/40 mb-4" />
                  <p className="text-white/80 leading-relaxed mb-6">"{item.text}"</p>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.name}</p>
                      <p className="text-white/40 text-xs">{item.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={12} weight="fill" className="text-gold-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — with diagonal top */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 0V60H0Z" className="fill-navy-900" />
          </svg>
        </div>
        <div className="relative bg-gradient-to-br from-gold-500 to-gold-600 py-24">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }} />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                {homeCta.titleParts.map((part, i) =>
                  part.highlight ? (
                    <span key={i} className="text-white">{part.text}</span>
                  ) : (
                    <React.Fragment key={i}>{part.text}</React.Fragment>
                  )
                )}
              </h2>
              <p className="text-navy-900/70 text-lg mb-10 max-w-2xl mx-auto">{homeCta.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg">
                  <Phone size={20} />
                  {homeCta.ctaPrimary}
                </Link>
                <a href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg">
                  <WhatsappLogo size={20} weight="fill" />
                  WhatsApp
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Home;
