<template>
  <div style="background: url(/images/apples.jpg)" class="min-h-screen">
    <header>
      <h1 class="text-6xl text-center font-bold py-8 text-white tracking-wide">
        Apple Dip
      </h1>
    </header>
    <div class="container mx-auto flex flex-col md:flex-row md:space-x-4">
      <div class="py-4 mx-4 md:mx-auto md:w-1/2 md:py-0">
        <img
          class="w-full h-auto rounded shadow"
          src="/images/apple-slices.jpg"
          alt="apple slices"
        />
      </div>
      <div
        class="md:w-1/2 mx-4 md:mx-auto bg-opacity-90 bg-white p-6 rounded mb-6"
      >
        <h2 class="text-2xl font-bold mb-4">Ingredients</h2>
        <ul class="mb-4 fnt-medium">
          <li>8 oz. cream cheese, softened</li>
          <li>1/2 c. brown sugar</li>
          <li>1 tsp. vanilla</li>
          <li>1/2 c. walnuts, chopped</li>
        </ul>
        <div>
          <h2 class="text-2xl font-bold mb-4">Directions</h2>
          <ol class="list-decimal list-inside font-medium">
            <li>Whip cream cheese, brown sugar, and vanilla.</li>
            <li>Spread in a dish.</li>
            <li>Sprinkle walnuts around the edges.</li>
            <li>Serve with apple wedges.</li>
          </ol>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppleDip',
}
</script>
