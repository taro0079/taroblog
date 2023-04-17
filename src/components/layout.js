import * as React from "react"
import "@fontsource/noto-sans-jp"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/" className="blog-text text-4xl md:text-5xl font-black">
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="blog-text header-link-home text-3xl font-black" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="mt-10 text-xs flex flex-col justify-center items-center">
        {new Date().getFullYear()}, Built by
        {` `}
        Taro Morita
      </footer>
    </div>
  )
}

export default Layout
