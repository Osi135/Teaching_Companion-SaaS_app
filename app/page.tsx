import React from 'react'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import CompanionCard from '@/components/CompanionCard'
import { recentSessions } from '@/constants'


const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Our top Companions</h1>
      <section className="home-section">
        { recentSessions.slice(0,3).map(({id, subject, name, topic, duration, color}) => (
          <CompanionCard key={id} id={id} subject={subject} name={name} topic={topic} duration={duration} color={color} />
        ))}
      </section>
      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  )
}

export default Page