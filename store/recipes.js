export const state = () => ({
  all: [
    {
      id: 1,
      name: 'Olga Bread',
      slug: 'olga-bread',
      categories: ['breads'],
      bg_img: 'breads.jpg',
      featured_img: 'olga-bread.jpg',
      ingredients: [
        '1 c. milk, warmed up',
        '1/4 c. honey',
        '1/4 c. butter',
        '1 tsp. salt',
        '2 1/4 tsp. yeast (1 pkg.)',
        '4 c. flour',
        '1 egg',
      ],
      steps: [
        'Combine ingredients in bread maker.',
        'Use the dough setting.',
        'When the dough has about doubled in size, punch down dough and divide into 16 pieces.',
        'Roll each piece into a thin circle.',
        'Over medium-high heat, cook a circle in a large dry (no oil) skillet for 15 seconds.',
        'Flip and cook for about 10 seconds more, until mottled brown spots appear.',
        'Continue until all circles are cooked.',
      ],
    },
    {
      id: 2,
      name: 'Breakfast Casserole',
      slug: 'breakfast-casserole',
      categories: ['breakfast'],
      bg_img: 'colorful-eggs.jpg',
      featured_img: 'breakfast-casserole.jpg',
      ingredients: [
        '3 c. frozen shredded hash brown potatoes',
        '3/4 c. shredded cheese',
        '1/4 c. sliced green onions',
        '1 c. diced ham, crumbled & cooked bacon, crumbled & cooked sausage or vegan sausage, opt.',
        '4 eggs',
        '1 1/2 c. milk',
        '1/8 tsp. salt',
        '1/8 tsp. pepper',
      ],
      steps: [
        `
            If you are preparing this to eat right away, preheat oven to 350
            degrees F.
          `,
        `Spray a 2-quart baking dish with cooking oil spray.`,
        `Put potatoes in a layer on the bottom of the dish.`,
        `Layer cheese, meat, and onions on top.`,
        `In a bowl, whisk together the eggs, milk, salt, and pepper.`,
        `Pour egg mixture over potato mixture.`,
        `
            If you are going to eat this now, bake uncovered for 40-45 min.,
            or until knife inserted near the center comes clean.
          `,
        `Or cover and chill for up to 24 hours.`,
        `
            Bake at 350 degrees F uncovered for 50-65 min. or until knife
            inserted near the center comes clean.
          `,
        `Let stand 5 min. before serving.`,
      ],
    },
    {
      id: 3,
      name: 'Granola',
      slug: 'granola',
      categories: ['breakfast'],
      bg_img: 'wheat.jpg',
      featured_img: 'granola.jpg',
      ingredients: [
        '1/2 c. butter, softened',
        '1 c. brown sugar',
        '1/3 c. water or juice',
        '1 tsp. vanilla',
        '1/2 tsp. salt',
        '1/2 tsp. cinnamon',
        '1/2 tsp. cardamom (or nutmeg or allspice)',
        '1 1/4 c. wheat flour',
        '1 1/3 c. coconut',
        '1 c. chopped/sliced almonds, walnuts, pecans, or a mixture',
      ],
      steps: [
        `Preheat oven to 300 degrees F.`,
        `
              In a saucepan over med. heat, combine sugar, butter, and water.
            `,
        `Heat until mixture is melted and bubbly.`,
        `Remove from heat and add vanilla.`,
        `Pour liquid mixture over dry mixture and stir well to coat.`,
        `Let sit 10 min.`,
        `
              Spread on 2 baking sheets. Put one on the upper rack and one on
              the bottom rack of the oven.
            `,
        `
              Bake for 15 min. Stir to break up the mixture into medium-sized
              clumps. Switch the position of the 2 baking sheets.
            `,
        `
              Bake for 15 min more.. Stir and switch the position of the 2
              baking sheets again.
            `,
        `Bake for 15 min or until uniformly golden brown and dry.`,
        `Cool completely and store in an air-tight container.`,
      ],
    },
    {
      id: 4,
      name: 'Quiche',
      slug: 'quiche',
      categories: ['breakfast', 'entrees'],
      bg_img: 'eggs.jpg',
      featured_img: 'quiche.jpg',
      ingredients: [
        `1 refrigerated or frozen pie crust (or make your own)`,
        `1/2 onion, chopped`,
        `
              Other filling ingredients, like mushrooms, peppers, regular/vegan
              bacon or sausage, etc.
            `,
        `1 c. shredded cheese`,
        `3 eggs`,
        `3/4 c. milk`,
        `1/2 tsp. salt`,
        `1/8 tsp. pepper`,
      ],
      steps: [
        `Preheat oven to 425 degrees F.`,
        `If crust isn't in a pan, press crust into a 9-inch pan.`,
        `Bake crust for 5 min.`,
        `Remove, and reduce oven temperature to 375 degrees F.`,
        `
              If using bacon, cook bacon until crisp. Remove, set aside, and
              crumble. Discard all but about 1 T. of bacon drippings.
            `,
        `
              Use the drippings in the pan (or oil) to saute the onion and other
              filling ingredients, until soft.
            `,
        `
              Sprinkle 1/2 c. cheese in the pie shell. Spread filling
              ingredients on top.
            `,
        `
              Beat eggs, milk, salt, and pepper together. Pour mixture in pie
              shell.
            `,
        `Sprinkle with remaining 1/2 c. cheese.`,
        `Bake 30-35 min., or until golden brown.`,
      ],
    },
    {
      id: 5,
      name: 'Brownies',
      slug: 'brownies',
      categories: ['desserts', 'bars'],
      bg_img: 'chocolate.jpg',
      featured_img: 'brownies.jpg',
      ingredients: [
        '1/2 c. butter, softened',
        '1/2 c. oil',
        '2 c. sugar',
        '1/2 c. cocoa',
        '1 tsp. vanilla',
        '4 eggs',
        '1 1/4 c. flour',
        '1/2 tsp. baking powder',
        '1/2 tsp. salt',
      ],
      subRecipe: {
        name: 'Peanut Butter Filling (optional)',
        ingredients: [
          '3/4 c. peanut butter',
          '1 c. powdered sugar',
          '2 tsp. vanilla',
          '2 T. milk',
        ],
      },
      steps: [
        `Preheat oven to 350 degrees F.`,
        `Grease a 9" x 13" pan.`,
        `
              In a large bowl, add and mix the ingredients in the order listed.
            `,
        `
              If you want peanut butter filling, mix the filling ingredients in
              a separate bowl.
            `,
        `Pour all of the batter into the pan if not using filling.`,
        `
              Otherwise, pour 1/2 the batter in the pan. Then put the filling in
              clumps on top.
            `,
        `Then pour the rest of the batter in and smooth.`,
        `
              Bake for about 25-32 min., depending on how gooey you like your
              brownies.
            `,
      ],
    },
  ],
})
