import Image from "next/image"
import Link from "next/link"

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learing your way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize your own Companion
      </h2>
      <p>Pick a name, subject, voice & personality - and start learnign through voice conversations that feel natural and fun.</p>
      <Image src="/images/cta.svg" alt="CTA Image" width={363} height={232} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/>
        <Link href="/companions/new" className="cta-button">
          <p>Build a New Companion</p>
        </Link>
      </button>
    </section>
  )
}

export default CTA