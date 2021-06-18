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
    <div class="container rounded shadow w-1/2 bg-opacity-75 bg-white">
      <h1 class="text-3xl font-bold text-center p-4 md:p-12 md:text-9xl">
        favorite recipes
      </h1>
      <div class="flex items-center justify-center w-full">
        <nuxt-link
          class="
            mx-auto
            px-3
            font-bold
            py-1
            border border-black
            rounded
            m-2
            bg-white bg-opacity-80
            text-xl
          "
          to="/desserts/brownies"
          >Brownies</nuxt-link
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
