import Link from 'next/link'

export default function Header() {
  return (
    <head>
      <div className="container">
        <Link href='/' >
          <h2>Dev blog d</h2>
        </Link>
      </div>
    </head>
  )
}