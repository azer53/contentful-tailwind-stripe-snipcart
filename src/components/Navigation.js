import React, { useRef } from "react"
import Logo from "../images/example-logo.svg"
import { Link } from "gatsby"
import { bool, func } from "prop-types"
import MobileNavigation from "./MobileNavigation"
import { useOnClickOutside } from "./hooks"

const Navigation = ({ open, setOpen }) => {
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  return (
    <div id="nav" className="bg-white shadow">
      <div className="md:px-8">
        <nav className="relative flex flex-wrap items-center justify-between md:py-4">
          <div className="relative z-10 flex-shrink-0 pl-4 py-4 md:p-0">
            <img src={Logo} alt="" className="h-8 w-8" />
          </div>
          <div className="flex-shrink-0 pr-4 md:hidden">
            {!open && (
              <button
                type="button"
                aria-label="Menu"
                className="block text-gray-600 focus:outline-none focus:text-gray-900"
                onClick={() => setOpen(true)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"></path>
                  <path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"></path>
                  <path d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"></path>
                </svg>
              </button>
            )}
          </div>
          <div className="hidden md:block md:ml-10 md:flex md:items-baseline md:justify-between md:bg-transparent">
            <div className="lg:absolute inset-0 flex items-center justify-center">
              <Link
                to="/"
                className="text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                Products
              </Link>
              <Link
                to="/"
                className="ml-10 text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                Marketplace
              </Link>
              <Link
                to="/"
                className="ml-10 text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                Partners
              </Link>
              <Link
                to="/"
                className="ml-10 text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                About
              </Link>
            </div>
            <div className="ml-10 relative flex items-baseline">
              <Link
                to="/"
                className="text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                Log in
              </Link>
              <Link
                to="/"
                className="ml-8 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
              >
                Create Account
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div ref={node} id="mobile-navigation">
        <MobileNavigation open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}
Navigation.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}
export default Navigation
