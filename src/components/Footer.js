import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="underline">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="flex items-center lg:py-2">
          <Link
            href="mailto:tylercaillet2121@gmail.com"
            className="underline underline-offset-2"
          >
            Tyler Caillet
          </Link>
        </div>
        <Link
          href="/"
          target={'_blank'}
          className="underline underline-offset-2"
        >
          Nextjs, Tailwind, Framer-Motion
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
