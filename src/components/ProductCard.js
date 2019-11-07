import React from "react"
import Sample from "../images/work.jpg"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export default function ProductCard({ name, description, price }) {
  return (
    <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
      <div class="h-full pb-8 rounded shadow-md bg-gray-100">
        <Link to="/product">
          <img class="mb-4" src={Sample} alt="" />
          <div class="px-6">
            <small>{price}</small>
            <h3 class="text-xl my-3 font-heading">{name}</h3>
            <p class="text-gray-500">{description}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
}
