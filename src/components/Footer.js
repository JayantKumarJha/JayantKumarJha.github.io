import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <div className="py-8 flex items-center justify-between px-32 lg:px-16 md:px-12 sm:px-8 xl:flex-col xl:py-6 gap-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Built with&nbsp;<span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>&nbsp;by&nbsp;
          <Link href="/" className="underline underline-offset-2">
            Jayant Kumar Jha
          </Link>
        </div>
        <Link href="/" className="underline underline-offset-2">
          Say Hello
        </Link>
      </div>
    </footer>
  )
}

export default Footer
