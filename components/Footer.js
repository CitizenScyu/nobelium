import { useConfig } from '@/lib/config'
import Image from 'next/image'
import Vercel from '@/components/Vercel'
const Footer = ({ fullWidth }) => {
  const BLOG = useConfig()

  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </p>
        <a href="https://t.me/CitizenScyu" className="flex items-center">
        <span className="mr-1">五星上将麦克阿象</span>
         <Image
          src="/favicon.png"
          alt="favicon"
          width={24}
          height={24}
        />
      </a> 
        </div>
      </div>
    </div>
  )
}

export default Footer
