import { NextSeo } from 'next-seo'
import clsx from 'clsx'
import Layout from '../components/Layout'
import { InView } from 'react-intersection-observer'

const Home: React.FC = () => {
  return (
    <Layout>
      <NextSeo title="One per Element" />
      <div
        className={clsx(
          'grid grow shrink-0 place-content-center place-items-center'
        )}
      >
        <ul className="flex flex-wrap gap-1 justify-center">
          {[...Array(1000)].map((_, i) => {
            return (
              <InView key={i}>
                {({ inView, ref }) => {
                  return (
                    <li
                      ref={ref}
                      className={clsx(
                        'basis-[9%] text-center rounded border',
                        inView && 'text-red-500'
                      )}
                    >
                      {i + 1}
                    </li>
                  )
                }}
              </InView>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Home
