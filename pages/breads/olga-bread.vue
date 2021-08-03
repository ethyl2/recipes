<template>
  <div
    style="background: url(/images/breads.jpg) no-repeat center center fixed"
    class="min-h-screen"
  >
    <header>
      <h1 class="text-6xl text-center font-bold py-8 text-white tracking-wide">
        Olga Bread
      </h1>
    </header>
    <div class="container mx-auto flex flex-col md:flex-row md:space-x-4">
      <div class="py-4 mx-4 md:mx-auto md:w-1/2 md:py-0">
        <img
          class="w-full h-auto rounded shadow"
          src="/images/olga-bread.jpg"
          alt="olga bread"
        />
      </div>
      <div
        class="md:w-1/2 mx-4 md:mx-auto bg-opacity-90 bg-white p-6 rounded mb-6"
      >
        <h2 class="text-2xl font-bold mb-4">Ingredients</h2>
        <ul class="mb-4 font-medium">
          <li>1 c. milk, warmed up</li>
          <li>1/4 c. honey</li>
          <li>1/4 c. butter</li>
          <li>1 tsp. salt</li>
          <li>2 1/4 tsp. yeast (1 pkg.)</li>
          <li>4 c. flour</li>
          <li>1 egg</li>
        </ul>
        <div>
          <h2 class="text-2xl font-bold mb-4">Directions</h2>
          <ol class="list-decimal list-inside font-medium">
            <li>Combine ingredients in bread maker.</li>
            <li>Use the dough setting.</li>
            <li>
              When the dough has about doubled in size, punch down dough and
              divide into 16 pieces.
            </li>
            <li>Roll each piece into a thin circle.</li>
            <li>
              Over medium-high heat, cook a circle in a large dry (no oil)
              skillet for 15 seconds.
            </li>
            <li>
              Flip and cook for about 10 seconds more, until mottled brown spots
              appear.
            </li>
            <li>Continue until all circles are cooked.</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OlgaBread',
}
</script>
