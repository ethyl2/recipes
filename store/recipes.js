export const state = () => ({
  all: [
    {
      id: 1,
      name: 'Olga Bread',
      slug: 'olga-bread',
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
  ],
})
