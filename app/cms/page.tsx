import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={''}>
      <Link href={'/cms/login'}>Login</Link>
    </div>
  )
}
