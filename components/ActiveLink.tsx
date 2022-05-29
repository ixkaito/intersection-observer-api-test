import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  className?: string
} & LinkProps

const ActiveLink: React.FC<Props> = ({ children, className, ...props }) => {
  const { asPath } = useRouter()

  return (
    <Link
      className={clsx(
        className,
        'grid place-items-center px-[0.1em] pt-[1em] pb-[0.75em] h-full text-gray-500 hover:text-black',
        (asPath === props.href || asPath === props.as) &&
          'text-black border-b-2 border-black border-solid'
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
