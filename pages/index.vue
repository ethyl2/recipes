<template>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-contain bg-center bg-no-repeat
    "
    style="background: url(images/food_bowl.jpg)"
  >
    <div
      class="container rounded shadow p-4 w-3/4 bg-opacity-75 bg-white lg:w-1/2"
    >
      <h1
        class="
          text-3xl
          font-bold
          text-center
          p-4
          md:p-12 md:text-9xl
          lg:text-3xl
        "
      >
        Favorite Recipes
      </h1>
      <div
        class="
          flex flex-col
          items-stretch
          justify-center
          w-full
          mb-6
          md:flex-row md:flex-wrap
        "
      >
        <nuxt-link
          class="
            px-3
            font-bold
            py-1
            border border-black
            rounded
            bg-white bg-opacity-80
            text-xl
            flex
            items-center
            justify-center
            mb-2
            md:m-2
            hover:bg-black hover:text-white
          "
          to="/desserts/brownies"
          >Brownies</nuxt-link
        >
        <nuxt-link
          class="
            px-3
            font-bold
            py-1
            border border-black
            rounded
            bg-white bg-opacity-80
            text-xl
            flex
            items-center
            justify-center
            md:m-2
            hover:bg-black hover:text-white
            mb-2
          "
          to="/desserts/chocolate-chip-cookies"
          >Chocolate Chip Cookies</nuxt-link
        >
        <nuxt-link
          class="
            px-3
            font-bold
            py-1
            border border-black
            rounded
            bg-white bg-opacity-80
            text-xl
            flex
            items-center
            justify-center
            md:m-2
            hover:bg-black hover:text-white
            mb-2
          "
          to="/sides/apple-dip"
          >Apple Dip</nuxt-link
        >
        <nuxt-link
          class="
            px-3
            font-bold
            py-1
            border border-black
            rounded
            bg-white bg-opacity-80
            text-xl
            flex
            items-center
            justify-center
            md:m-2
            hover:bg-black hover:text-white
            mb-2
          "
          to="/breads/olga-bread"
          >Olga Bread</nuxt-link
        >
        <nuxt-link
          class="
            px-3
            font-bold
            py-1
            border border-black
            rounded
            bg-white bg-opacity-80
            text-xl
            flex
            items-center
            justify-center
            md:m-2
            hover:bg-black hover:text-white
            mb-2
          "
          to="/sauces/cream-cheese-alfredo"
          >Alfredo Sauce</nuxt-link
        >
        <nuxt-link
          class="
            px-3
            font-bold
            py-1
            border border-black
            rounded
            bg-white bg-opacity-80
            text-xl
            flex
            items-center
            justify-center
            md:m-2
            hover:bg-black hover:text-white
            mb-2
          "
          to="/pasta/mac-n-cheese"
          >Mac-n-Cheese</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

/* .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
} */

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
