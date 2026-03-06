'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <div className="w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8">
          <div className="flex items-center justify-between w-full lg:flex-col">

            {/* Profile Image */}
            <div className="w-1/2 md:w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
                style={{ maxWidth: '400px', margin: '0 auto' }}
              >
                <Image
                  src="/profile_picture.jpeg"
                  alt="Jayant Kumar Jha"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
                {/* Floating tech tags */}
                <motion.span
                  className="absolute top-8 -right-4 bg-primary text-light text-xs font-semibold px-3 py-1 rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  AI/ML
                </motion.span>
                <motion.span
                  className="absolute bottom-16 -left-8 bg-dark dark:bg-light text-light dark:text-dark text-xs font-semibold px-3 py-1 rounded-full"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Optimization
                </motion.span>
                <motion.span
                  className="absolute top-1/2 -right-12 bg-primaryDark text-dark text-xs font-semibold px-3 py-1 rounded-full"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  Scheduling
                </motion.span>
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="w-1/2 flex flex-col items-start self-center lg:w-full lg:text-center lg:items-center">
              <AnimatedText
                text="Turning Data Into Optimal Decisions."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <motion.p
                className="my-4 text-base font-medium md:text-sm sm:text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                Consultant specializing in optimization algorithms, production scheduling, and AI/ML systems.
                M.Tech from IIT Bombay. I design algorithmic solutions that turn complex industrial problems
                into measurable efficiency gains.
              </motion.p>

              <motion.div
                className="flex items-center self-start mt-2 lg:self-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <Link
                  href="/projects"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-all duration-300 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  My Projects
                </Link>
                <Link
                  href="mailto:jayant@example.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="pt-16 pb-8 flex items-center justify-between xl:flex-col gap-8">
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                3+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Years Experience
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                10+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Projects Completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                5+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Domain Areas
              </h2>
            </div>
          </div>
        </div>
        <HireMe />
      </main>
    </>
  )
}
