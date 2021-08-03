<template>
  <div
    style="background: url(/images/chocolate.jpg) no-repeat center center fixed"
  >
    <header>
      <h1 class="text-6xl text-center font-bold py-8 text-white tracking-wide">
        Brownies
      </h1>
    </header>
    <div
      class="
        container
        mx-auto
        min-h-screen
        flex flex-col
        md:flex-row md:space-x-4
      "
    >
      <div class="py-4 mx-4 md:mx-auto md:w-1/2 md:py-0">
        <img
          class="w-full h-auto rounded shadow"
          src="/images/brownies.jpg"
          alt="brownies"
        />
      </div>
      <div
        class="md:w-1/2 mx-4 md:mx-auto bg-opacity-90 bg-white p-6 rounded mb-6"
      >
        <h2 class="text-2xl font-bold mb-4">Ingredients</h2>
        <div class="flex flex-col md:flex-row md:justify-around">
          <ul class="mb-4 font-medium">
            <li>1/2 c. butter, softened</li>
            <li>1/2 c. oil</li>
            <li>2 c. sugar</li>
            <li>1/2 c. cocoa</li>
            <li>1 tsp. vanilla</li>
            <li>4 eggs</li>
            <li>1 1/4 c. flour</li>
            <li>1/2 tsp. baking powder</li>
            <li>1/2 tsp. salt</li>
          </ul>
          <div>
            <h3 class="text-lg font-bold mb-4">
              Peanut Butter Filling (optional)
            </h3>
            <ul class="font-medium">
              <li>3/4 c. peanut butter</li>
              <li>1 c. powdered sugar</li>
              <li>2 tsp. vanilla</li>
              <li>2 T. milk</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Directions</h2>
          <ol class="list-decimal list-inside font-medium">
            <li>Preheat oven to 350 degrees F.</li>
            <li>Grease a 9" x 13" pan.</li>
            <li>
              In a large bowl, add and mix the ingredients in the order listed.
            </li>
            <li>
              If you want peanut butter filling, mix the filling ingredients in
              a separate bowl.
            </li>
            <li>Pour all of the batter into the pan if not using filling.</li>
            <li>
              Otherwise, pour 1/2 the batter in the pan. Then put the filling in
              clumps on top.
            </li>
            <li>Then pour the rest of the batter in and smooth.</li>
            <li>
              Bake for about 25-32 min., depending on how gooey you like your
              brownies.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brownies',
}
</script>
