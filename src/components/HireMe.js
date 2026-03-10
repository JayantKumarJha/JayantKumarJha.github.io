'use client'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-36 h-auto flex items-center justify-center relative md:w-24">
        <svg
          className="fill-dark animate-spin-slow dark:fill-light"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="circlePath"
            d="M 10, 50 A 40,40 0 1,1 90,50 40,40 0 1,1 10,50"
            fill="none"
          />
          <text>
            <textPath xlinkHref="#circlePath" className="text-[10px] font-semibold tracking-widest">
              Optimization Engineer•AI/ML Consultant •&nbsp;
            </textPath>
          </text>
        </svg>
        <Link
          href="mailto:iamjayant.ieor23@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark transition-all duration-300 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
