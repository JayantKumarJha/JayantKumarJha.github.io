'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import Skills from '@/components/Skills'
import { Experience, Education } from '@/components/Experience'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <span ref={ref}>
      {isInView ? value : 0}+
    </span>
  )
}

export default function About() {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <div className="pt-16 w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-8 w-full gap-16 sm:gap-8">
            {/* Bio */}
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m <strong>Jayant Kumar Jha</strong>, a consultant and engineer working at the
                intersection of optimization, machine learning, and intelligent systems. I completed my
                M.Tech from <strong>IIT Bombay</strong>, where I built strong foundations in analytical
                thinking and computational problem solving.
              </p>
              <p className="my-4 font-medium">
                My philosophy centers on building <em>practical, implementable algorithms</em> rather than
                purely theoretical models — ensuring research ideas translate into real-world industrial impact.
                I specialize in production scheduling, decision optimization, and industrial planning systems.
              </p>
              <p className="font-medium">
                I am particularly fascinated by how modern AI techniques can be integrated with classical
                operations research to build next-generation decision-support systems for manufacturing,
                supply chains, and logistics.
              </p>
            </div>

            {/* Stats */}
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-4 md:order-3 sm:items-center">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={3} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years Experience
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={10} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={5} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Domain Specializations
                </h2>
              </div>
            </div>

            {/* Profile visual */}
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-8 xl:flex-row md:order-1">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <div className="w-full h-64 rounded-xl bg-gradient-to-br from-primary/20 via-primaryDark/10 to-primary/30 dark:from-primaryDark/20 flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full bg-dark dark:bg-light flex items-center justify-center">
                  <span className="text-2xl font-black text-light dark:text-dark">JKJ</span>
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg">Jayant Kumar Jha</p>
                  <p className="text-sm text-dark/60 dark:text-light/60">M.Tech — IIT Bombay</p>
                  <p className="text-xs text-primary dark:text-primaryDark font-semibold mt-1">
                    Optimization & AI/ML Consultant
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </div>
      </main>
    </>
  )
}
