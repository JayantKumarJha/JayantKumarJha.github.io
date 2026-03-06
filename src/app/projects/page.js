'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(({ className, alt, ...props }) => (
  <div className={`relative overflow-hidden ${className}`} {...props}>
    <div className="w-full h-full bg-gradient-to-br from-dark/10 to-dark/30 dark:from-light/5 dark:to-light/20 flex items-center justify-center">
      <span className="text-4xl font-black opacity-20">{alt?.[0]}</span>
    </div>
  </div>
))

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const FeaturedProject = ({ type, title, summary, link, github, tags }) => {
  return (
    <article className="relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <div className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <motion.div
          className="w-full h-56 bg-gradient-to-br from-primary/20 via-primaryDark/10 to-dark/20 dark:from-primaryDark/20 dark:to-light/10 rounded-lg flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-center">
            <div className="text-6xl font-black text-dark/10 dark:text-light/10">{title[0]}</div>
            <div className="flex gap-2 mt-4 flex-wrap justify-center px-4">
              {tags?.map(tag => (
                <span key={tag} className="text-xs bg-primary/10 text-primary dark:text-primaryDark px-2 py-0.5 rounded-full font-medium">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <motion.a
            href={github}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10"
            aria-label="GitHub"
          >
            <GithubIcon />
          </motion.a>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, summary, link, github, tags }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <div className="w-full cursor-pointer overflow-hidden rounded-lg">
        <motion.div
          className="w-full h-40 bg-gradient-to-br from-primary/10 to-dark/10 dark:from-primaryDark/10 dark:to-light/5 rounded-lg flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-5xl font-black text-dark/10 dark:text-light/10">{title[0]}</div>
        </motion.div>
      </div>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2 w-full">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <p className="text-sm font-medium text-dark/75 dark:text-light/75 mb-4">{summary}</p>
        <div className="flex gap-1 flex-wrap mb-4">
          {tags?.map(tag => (
            <span key={tag} className="text-xs bg-primary/10 text-primary dark:text-primaryDark px-2 py-0.5 rounded-full font-medium">{tag}</span>
          ))}
        </div>
        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="underline text-lg font-medium md:text-base"
          >
            Visit
          </Link>
          <motion.a
            href={github}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 md:w-6"
            aria-label="GitHub"
          >
            <GithubIcon />
          </motion.a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <div className="pt-16 w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8">
          <AnimatedText
            text="Imagination Meets Optimization!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Production Scheduling Optimization System"
                summary="A hybrid heuristic algorithm combining greedy strategies and local search to generate efficient production schedules. Handles real-world manufacturing constraints including changeover times, raw material availability, shift windows, fumigation windows, and utilization maximization."
                link="https://github.com/JayantKumarJha"
                github="https://github.com/JayantKumarJha"
                tags={['Python', 'Operations Research', 'Greedy Algorithm', 'Local Search', 'Manufacturing']}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="AI / Reinforcement Learning"
                title="RL Scheduling Environment"
                summary="A reinforcement learning environment for production scheduling where agents learn optimal scheduling strategies through interaction with a simulated production system."
                link="https://github.com/JayantKumarJha"
                github="https://github.com/JayantKumarJha"
                tags={['Python', 'RL', 'OpenAI Gym', 'PyTorch']}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Application"
                title="Industrial Scheduling Web App"
                summary="A web-based interface that makes complex scheduling algorithms accessible to non-technical users. Features Excel upload, automatic schedule generation, and visual Gantt-style outputs."
                link="https://github.com/JayantKumarJha"
                github="https://github.com/JayantKumarJha"
                tags={['Python', 'Streamlit', 'Pandas', 'Excel']}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Decision Support System for Industrial Planning"
                summary="An integrated decision-support tool combining data analysis with optimization algorithms to help organizations plan production schedules, allocate resources efficiently, and reduce idle time in manufacturing systems."
                link="https://github.com/JayantKumarJha"
                github="https://github.com/JayantKumarJha"
                tags={['Python', 'LP/ILP', 'Dashboard', 'Data Analysis', 'Supply Chain']}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Machine Learning"
                title="Demand Forecasting Model"
                summary="A time-series forecasting system designed to predict production demand, enabling better raw material procurement and capacity planning in manufacturing contexts."
                link="https://github.com/JayantKumarJha"
                github="https://github.com/JayantKumarJha"
                tags={['Python', 'LSTM', 'Time Series', 'scikit-learn']}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Optimization Research"
                title="Constraint-Based Job Shop Scheduler"
                summary="Implementation and comparison of classical scheduling heuristics (SPT, LPT, NEH) vs metaheuristic approaches (Simulated Annealing, Genetic Algorithm) on real job-shop instances."
                link="https://github.com/JayantKumarJha"
                github="https://github.com/JayantKumarJha"
                tags={['Python', 'Metaheuristics', 'OR', 'Benchmarking']}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
