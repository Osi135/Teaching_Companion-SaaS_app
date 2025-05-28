import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

interface CompanionCardProps {
  id: string,
  subject: string,
  name: string,
  topic: string,
  duration: number,
  color: string 
}

const Companioncard = ({ id, subject, name, topic, duration, color }: CompanionCardProps) => {
  return (
    <article  className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex items-center justify-between">
        <div className="subject-badge">
            {subject}
        </div> 
        <button className="companion-bookmark">
          <Image src="/icons/bookmark.svg" alt="Bookmark Icon" width={12.5} height={15} />
        </button>
      </div>
      <h2 className='text-2xl font-bold'>{name}</h2>
      
      <p className='text-sm'>{topic}</p>
      <div className='flex items-center gap-2'>
        <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5}></Image>
        <p className="text-sm">{duration} min.</p>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className='btn-primary w-full justify-center'>
          Start Session
        </button>
      </Link>
    </article>
  )
}

export default Companioncard