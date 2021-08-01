<template>
  <div>
    <header
      class="
        flex flex-row
        items-center
        justify-between
        bg-black
        py-2
        border-b-4 border-white
      "
    >
      <a href="/" class="rounded p-1 bg-white ml-4 hover:bg-gray-400">
        <img
          src="/images/fork-and-spoon.png"
          alt="Favorite Recipes Logo"
          class="rounded h-12"
        />
      </a>
      <h1
        class="
          bg-black
          text-white
          font-bold
          py-4
          text-center text-xl
          md:text-4xl
        "
      >
        Favorite Recipes
      </h1>
      <a href="/" class="rounded p-1 bg-white mr-4 invisible hover:bg-gray-400">
        <img
          src="/images/fork-and-spoon.png"
          alt="Favorite Recipes Logo"
          class="rounded h-12"
        />
      </a>
    </header>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
