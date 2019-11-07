import React from "react"
import ProductCard from "./ProductCard"

export default function() {
  return (
    <div>
      <section class="py-12 px-4">
        <h2
          class="text-3xl text-center mb-8 font-heading"
          data-config-id="header"
        >
          Just in
        </h2>
        <div class="flex flex-wrap -mx-4">
          <ProductCard
            name="Medium Denim shoes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at. Amet cursus sit amet dictum sit amet justo."
            price="45.34"
          />
          <ProductCard
            name="Small white shirt"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at. Amet cursus sit amet dictum sit amet justo."
            price="19.99"
          />
          <ProductCard
            name="Big brown shoes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at. Amet cursus sit amet dictum sit amet justo."
            price="89.99"
          />
        </div>
      </section>
    </div>
  )
}
