import Link from 'next/link';

function Nav() {
  return (
    <div className="d-flex justify-content-evenly ">
      <Link href="/">home</Link>
      <Link href="/browse">Browse</Link>
      <Link href="/addEditProf/new">Add</Link>
    </div>
  )
}

export default Nav
