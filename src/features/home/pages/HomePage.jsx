import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ReservationSection from '../components/ReservationSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import styles from '../styles/home.module.css'

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <section className={styles.content}>
        <ReservationSection />
      </section>
      <Contact />
      <Footer />
    </div>
  )
}