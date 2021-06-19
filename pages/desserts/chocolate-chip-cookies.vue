<template>
  <div style="background: url(/images/chocolate.jpg)">
    <header>
      <h1 class="text-6xl text-center font-bold py-8 text-white tracking-wide">
        Chocolate Chip Cookies
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
          src="/images/chocolate-chip-cookies.jpg"
          alt="chocolate chip cookies"
        />
      </div>
      <div
        class="md:w-1/2 mx-4 md:mx-auto bg-opacity-90 bg-white p-6 rounded mb-6"
      >
        <h2 class="text-2xl font-bold mb-4">Ingredients</h2>
        <ul class="mb-4 font-medium">
          <li>1 1/2 c. butter, softened</li>
          <li>1 c. white sugar</li>
          <li>1 c. brown sugar</li>
          <li>2 eggs</li>
          <li>2 tsp. vanilla</li>
          <li>3 1/2 c. flour</li>
          <li>1 tsp. baking soda</li>
          <li>1 tsp. salt</li>
          <li>2 c. chocolate chips</li>
        </ul>
        <div>
          <h2 class="text-2xl font-bold mb-4">Directions</h2>
          <ol class="list-decimal list-inside font-medium">
            <li>Preheat oven to 350 degrees F.</li>
            <li>Cream the butter and sugars.</li>
            <li>Add eggs and vanilla and mix thoroughly.</li>
            <li>
              Add the flour, baking soda, and salt and mix until combined.
            </li>
            <li>Add the chocolate chips.</li>
            <li>
              Bake drops of dough on ungreased cookie sheets and bake for about
              8-9 min.
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
