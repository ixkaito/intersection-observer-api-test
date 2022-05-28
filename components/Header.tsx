import Link from './ActiveLink'

const Header: React.FC = () => {
  return (
    <header className="px-4 border-b border-gray-200">
      <nav>
        <style jsx>{`
          a {
            @apply text-gray-500 inline-block hover:text-black;
            padding: 1em 0.1em 0.75em;
          }

          .active {
            @apply text-black border-b-2 border-solid border-black;
          }
        `}</style>
        <ul className="flex gap-8 justify-center">
          <li>
            <Link href="/">
              <a>One per Component</a>
            </Link>
          </li>
          <li>
            <Link href="/1/">
              <a>One IntersectionObserver Object</a>
            </Link>
          </li>
          <li>
            <Link href="/2/">
              <a>Multiple IntersectionObserver Objects</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
