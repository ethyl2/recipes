<template>
  <div style="background: url(/images/wheat.jpg) no-repeat center center fixed">
    <header>
      <h1 class="text-6xl text-center font-bold py-8 text-white tracking-wide">
        Granola
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
          src="/images/granola.jpg"
          alt="granola"
        />
      </div>
      <div
        class="md:w-1/2 mx-4 md:mx-auto bg-opacity-90 bg-white p-6 rounded mb-6"
      >
        <h2 class="text-2xl font-bold mb-4">Ingredients</h2>
        <div class="flex flex-col md:flex-row md:justify-around">
          <ul class="mb-4 font-medium">
            <li>1/2 c. butter, softened</li>
            <li>1 c. brown sugar</li>
            <li>1/3 c. water or juice</li>
            <li>1 tsp. vanilla</li>
            <li>1/2 tsp. salt</li>
            <li>1/2 tsp. cinnamon</li>
            <li>1/2 tsp. cardamom (or nutmeg or allspice)</li>
            <li>1 1/4 c. wheat flour</li>
            <li>1 1/3 c. coconut</li>
            <li>1 c. chopped/sliced almonds, walnuts, pecans, or a mixture</li>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Directions</h2>
          <ol class="list-decimal list-inside font-medium">
            <li>Preheat oven to 300 degrees F.</li>
            <li>
              In a saucepan over med. heat, combine sugar, butter, and water.
            </li>
            <li>Heat until mixture is melted and bubbly.</li>
            <li>Remove from heat and add vanilla.</li>
            <li>Pour liquid mixture over dry mixture and stir well to coat.</li>
            <li>Let sit 10 min.</li>
            <li>
              Spread on 2 baking sheets. Put one on the upper rack and one on
              the bottom rack of the oven.
            </li>
            <li>
              Bake for 15 min. Stir to break up the mixture into medium-sized
              clumps. Switch the position of the 2 baking sheets.
            </li>
            <li>
              Bake for 15 min more.. Stir and switch the position of the 2
              baking sheets again.
            </li>
            <li>Bake for 15 min or until uniformly golden brown and dry.</li>
            <li>Cool completely and store in an air-tight container.</li>
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
