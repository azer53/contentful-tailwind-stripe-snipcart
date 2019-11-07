import React from "react"
import { Link } from "gatsby"
import { bool, func } from "prop-types"
import Logo from "../images/example-logo.svg"

const MobileNavigation = ({ open, setOpen }) => {
  return (
    <>
      {open && (
        <div>
          <div className="md:hidden">
            <div className="z-10 fixed inset-0 transition-opacity">
              <div
                tabIndex="-1"
                className="absolute inset-0 bg-black opacity-50 js-outside-mobile-menu"
                onClick={() => setOpen(false)}
              ></div>
            </div>
            <div className="z-10 fixed inset-y-0 right-0 max-w-xs w-full bg-white transition-transform overflow-y-auto">
              <div className="relative z-10 bg-white">
                <div className="absolute top-0 right-0 p-4 block">
                  <button
                    type="button"
                    aria-label="Close"
                    className="text-gray-600 focus:outline-none focus:text-gray-900"
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path d="M18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="px-4 pt-4 pb-6">
                  <img src={Logo} alt="" className="h-8 w-8" />
                  <Link
                    to="/"
                    className="mt-8 block text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Products
                  </Link>
                  <Link
                    to="/"
                    className="mt-4 block font-medium text-gray-900 hover:text-gray-700"
                  >
                    Checkout
                  </Link>
                  <Link
                    to="/"
                    className="mt-4 block font-medium text-gray-900 hover:text-gray-700"
                  >
                    Payments
                  </Link>
                  <Link
                    to="/"
                    className="mt-4 block font-medium text-gray-900 hover:text-gray-700"
                  >
                    Billing
                  </Link>
                  <Link
                    to="/"
                    className="mt-4 block font-medium text-gray-900 hover:text-gray-700"
                  >
                    Insights
                  </Link>
                </div>
                <div className="border-t-2 border-gray-200 px-4 pt-6">
                  <Link
                    to="/"
                    className="block font-medium text-gray-900 hover:text-gray-700"
                  >
                    Marketplace
                  </Link>
                  <Link
                    to="/"
                    className="mt-4 block font-medium text-gray-900 hover:text-gray-700"
                  >
                    Partners
                  </Link>
                  <Link
                    to="/"
                    className="mt-4 block font-medium text-gray-900 hover:text-gray-700"
                  >
                    About
                  </Link>
                </div>
              </div>
              <div className="relative bg-white">
                <div className="px-4 pt-4 pb-6">
                  <Link
                    to="/"
                    className="block font-medium text-gray-900 hover:text-gray-700"
                  >
                    Log in
                  </Link>
                </div>
                <div className="p-4">
                  <Link
                    to="/"
                    className="block px-3 py-3 font-medium text-center bg-gray-300 rounded-lg text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
MobileNavigation.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}
export default MobileNavigation
