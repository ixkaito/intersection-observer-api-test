import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-50 border-t border-gray-200">
      <p className="text-center">
        © 2022{' '}
        <Link
          className="underline hover:no-underline"
          href="https://twitter.com/ixkaito"
          target="_blank"
          rel="noopener"
        >
          Kite
        </Link>{' '}
        /{' '}
        <Link
          className="underline hover:no-underline"
          href="https://kiteretz.com/about/"
          target="_blank"
          rel="noopener"
        >
          KITERETZ inc
        </Link>
        .
      </p>
    </footer>
  )
}

export default Footer
