import Image from 'next/image'
import { Nav } from './components/Nav'
import Test from './components/Problems/Test'

export default function Home() {
  return (
    <main className="bg-neutral-900 h-screen w-screen">
      <div className='text-gray-100 px-20 py-10'>
        <Nav />
        <Test />
      </div>
    </main>
  )
}
