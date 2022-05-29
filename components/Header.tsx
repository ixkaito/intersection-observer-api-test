import Link from './ActiveLink'

const Header: React.FC = () => {
  return (
    <header className="px-4 border-b border-gray-200">
      <nav>
        <ul className="flex gap-8 justify-center">
          <li>
            <Link href="/">One per Component</Link>
          </li>
          <li>
            <Link href="/1/">One IntersectionObserver Object</Link>
          </li>
          <li>
            <Link href="/2/">Multiple IntersectionObserver Objects</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
