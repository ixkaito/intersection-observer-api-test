import { NextSeo } from 'next-seo'
import clsx from 'clsx'
import Layout from '../components/Layout'
import { useEffect, useRef } from 'react'

const Page: React.FC = () => {
  const targets = useRef<HTMLLIElement[]>([])
  const addToTargets = (el: HTMLLIElement) => {
    if (el && !targets.current?.includes(el)) {
      targets.current.push(el)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('bg-red-50')
        } else {
          entry.target.classList.remove('bg-red-50')
        }
      })
    })
    targets.current.forEach((target) => {
      observer.observe(target)
    })
  }, [targets])

  return (
    <Layout>
      <NextSeo title="One Shared Observer" />
      <div
        className={clsx(
          'grid grow shrink-0 place-content-center place-items-center'
        )}
      >
        <ul className="flex flex-wrap gap-1 justify-center">
          {[...Array(1000)].map((_, i) => {
            return (
              <li
                key={i}
                className="basis-[9%] text-center rounded border"
                ref={addToTargets}
              >
                {i + 1}
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Page
