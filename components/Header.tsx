import Link from './ActiveLink'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 px-4 bg-white border-b border-gray-200">
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
          <li>
            <Link href="/3/">One Component per Viewport</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
