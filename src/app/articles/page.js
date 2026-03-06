'use client'
import { motion, useMotionValue } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block'
    x.set(event.pageX)
    y.set(-10)
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }

  return (
    <>
      <Link
        href={link}
        target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
      </Link>

      <motion.div
        ref={imgRef}
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        className="pointer-events-none! absolute z-10 rounded-lg overflow-hidden hidden"
      >
        <div className="w-96 h-60 bg-gradient-to-br from-primary/30 to-primaryDark/20 rounded-lg flex items-center justify-center">
          <p className="text-sm font-semibold text-dark/60 dark:text-light/60 px-8 text-center">{title}</p>
        </div>
      </motion.div>
    </>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm dark:text-primaryDark">
        {date}
      </span>
    </motion.li>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark -z-10 dark:bg-light" />
      <div className="w-full cursor-pointer overflow-hidden rounded-lg">
        <motion.div
          className="w-full h-48 bg-gradient-to-br from-primary/20 to-dark/10 dark:from-primaryDark/20 dark:to-light/10 rounded-lg flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-5xl font-black text-dark/10 dark:text-light/10">{title[0]}</span>
        </motion.div>
      </div>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
  )
}

export default function Articles() {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <div className="pt-16 w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Hybrid Heuristics for Production Scheduling in Constrained Environments"
              summary="An exploration of combining greedy initialization with local search to solve multi-constraint production scheduling problems common in FMCG and discrete manufacturing."
              time="12 min read"
              link="#"
            />
            <FeaturedArticle
              title="Reinforcement Learning Meets Operations Research: A Practical Guide"
              summary="How RL agents can learn scheduling policies by interacting with simulated factory environments — and how this compares to classical OR approaches in practice."
              time="10 min read"
              link="#"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">
            All Articles
          </h2>

          <ul>
            <Article
              title="Building a Production Scheduling Web App with Python and Streamlit"
              date="June 2024"
              link="#"
            />
            <Article
              title="Changeover Time Modeling in Job-Shop Scheduling: A Practitioner's Perspective"
              date="April 2024"
              link="#"
            />
            <Article
              title="Comparing Metaheuristics: Genetic Algorithms vs Simulated Annealing for Industrial Scheduling"
              date="February 2024"
              link="#"
            />
            <Article
              title="IIT Bombay to Industry: Lessons from Applying Operations Research in the Real World"
              date="November 2023"
              link="#"
            />
            <Article
              title="Decision Support Systems in Manufacturing: Beyond Excel and Intuition"
              date="September 2023"
              link="#"
            />
            <Article
              title="The State of AI in Industrial Optimization: What Works and What Doesn't"
              date="July 2023"
              link="#"
            />
          </ul>
        </div>
      </main>
    </>
  )
}
