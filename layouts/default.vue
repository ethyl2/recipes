<template>
  <div>
    <header
      class="flex flex-row items-center justify-between bg-black py-2 border-b-4 border-white"
    >
      <nuxt-link to="/" class="rounded p-1 bg-white ml-4 hover:bg-gray-400">
        <img
          src="/images/fork-and-spoon.png"
          alt="Favorite Recipes Logo"
          class="rounded h-8 md:h-12"
        />
      </nuxt-link>
      <h1
        class="bg-black text-white font-bold py-4 text-center text-xl md:text-4xl"
      >
        Favorite Recipes
      </h1>
      <nuxt-link
        to="/"
        class="rounded p-1 bg-white mr-4 invisible hover:bg-gray-400"
      >
        <img
          src="/images/fork-and-spoon.png"
          alt="Favorite Recipes Logo"
          class="rounded h-12"
        />
      </nuxt-link>
    </header>
    <Nuxt />
    <footer
      class="bg-black border-t-4 border-white mx-0 mb-0 text-center w-full flex flex-col items-center justify-center py-4 space-y-2 text-sm"
    >
      <div
        class="flex flex-col items-center w-full md:flex-row md:justify-between md:container"
      >
        <nav
          class="flex flex-row items-center justify-center text-white py-2 divide-x"
        >
          <nuxt-link class="pr-2 hover:font-bold sm:pr-4" to="/"
            >Home</nuxt-link
          >
          <nuxt-link class="px-2 hover:font-bold sm:px-4" to="/search"
            >Categories</nuxt-link
          >
          <nuxt-link class="px-2 hover:font-bold sm:px-4" to="/submit-recipe"
            >Add</nuxt-link
          >
          <nuxt-link class="px-2 hover:font-bold sm:px-4" to="/about"
            >About</nuxt-link
          >
          <nuxt-link class="pl-2 hover:font-bold sm:pl-4" to="/songs"
            >Playlists</nuxt-link
          >
        </nav>
        <nav class="flex items-center justify-center space-x-2">
          <a
            href="https://github.com/ethyl2"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded p-1 hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="1.73em"
              height="1.5em"
              style="
                -ms-transform: rotate(360deg);
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
              "
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1227.825 1000"
            >
              <path
                d="M1078.94-.985c-33.192-.491-110.295 10.777-239.027 96.936c-70.161-17.535-144.812-26.188-219.591-26.188c-82.278 0-165.425 10.448-242.965 31.719C192.534-24.605 110.955 1.234 110.955 1.234c-53.258 133.183-20.347 231.788-10.344 256.277C38.014 325.069-.2 411.338-.2 517.07c0 79.822 9.085 151.416 31.281 213.653c1.231 4.803.832 3.732 2.906 7.844c4.89 12.884 10.327 25.39 16.438 37.468c2.094 4.346 4 7.563 4 7.563c62.395 116.307 185.396 191.438 404.244 215.028l330.995.375c233.392-23.144 345.386-98.499 396.994-215.591l3.281-7.625c4.89-11.828 9.153-24.135 20.813-65.562c11.659-41.427 16.875-113.172 16.875-193.185c0-114.755-43.1-206.577-113.092-276.434c12.231-39.48 28.57-127.158-16.313-239.402c0 0-6.293-1.995-19.281-2.188zM818.1 420.133c53.893-.117 100.057 9.136 134.717 45.499v.031c43.369 45.541 68.749 100.525 68.749 159.778c0 276.658-177.932 284.183-397.4 284.183c-219.506 0-397.4-38.336-397.4-284.183c0-58.861 25.009-113.516 67.843-158.872c71.451-75.59 192.365-35.562 329.558-35.562c70.423-.011 136.564-10.75 193.935-10.875zm-408.807 81.468c-45.666 0-82.687 61.741-82.687 137.936c0 76.206 37.019 137.967 82.687 137.967c45.666 0 82.687-61.761 82.687-137.967c0-76.184-37.019-137.881-82.687-137.936zm443.649 0c-45.666 0-82.687 61.741-82.687 137.936c0 76.206 37.019 137.967 82.687 137.967c45.666 0 82.687-61.761 82.687-137.967c0-76.184-37.019-137.881-82.687-137.936z"
                fill="gray"
              />
            </svg>
            <span class="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com/ethyl22000"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded p-1 hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="1.5em"
              height="1.5em"
              style="
                -ms-transform: rotate(360deg);
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
              "
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z"
                fill="gray"
              />
            </svg>
            <span class="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/heather-nuffer/"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded p-1 hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="1.5em"
              height="1.5em"
              style="
                -ms-transform: rotate(360deg);
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
              "
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2c-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7c120.2 0 142.3 79.1 142.3 181.9v209.4z"
                fill="gray"
              ></path>
            </svg>
            <span class="sr-only">LinkedIn</span>
          </a>
        </nav>
      </div>
      <div
        class="w-full text-center text-white flex flex-col items-center justify-center md:flex-row md:space-x-1"
      >
        <p>Copyright © {{ currentYear }} Heather Nuffer.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

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
