/* eslint-disable @typescript-eslint/no-unused-vars */
import { createServer, Model } from 'miragejs';
import { isEmpty } from '@utils/isEmpty';

createServer({
  models: {
    products: Model,
    modiweeks: Model,
  },

  seeds(server) {
    server.create('product', {
      id: 1,
      mainImg: '',

      collection: '',
      title: 'Tailored Stretch',
      subtitle: 'Turn it Up Pants',
      price: 180,
      colors: ['#DEB222'],
      bestseller: true,
      sizes: ['xs', 'l'],
      inStock: false,
      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });

    server.create('product', {
      id: 2,
      mainImg: '',
      collection: '',
      title: 'Technical Silk',
      subtitle: 'Make a Splash',
      price: 120,
      colors: ['#909225', '#19418E'],
      bestseller: true,
      sizes: ['xs'],
      inStock: false,
      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 3,
      mainImg: '',
      collection: '',
      title: 'Cool Weave',
      subtitle: 'Anywhere Dress',
      price: 210,
      colors: ['#D0A5EA', '#909225', '#748C70'],
      bestseller: true,
      sizes: ['xs', 'l'],
      inStock: false,
      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 4,
      mainImg: '',
      collection: '',
      title: 'Elastic Waist',
      subtitle: 'Turn it Up Pants',
      price: 110,
      colors: ['#D0A5EA', '#909225'],
      bestseller: true,
      sizes: ['m', 'l'],
      inStock: true,
      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });

    server.create('product', {
      id: 5,
      mainImg: '',
      collection: '',
      title: 'Tailored Stretch',
      subtitle: 'Turn it Up Pants',
      price: 150,
      colors: ['#0C0C0C'],
      bestseller: false,
      sizes: ['xs', 's', 'm', 'l', 'xl'],
      inStock: true,
      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 6,
      mainImg: '',
      collection: '',
      title: 'Hight Tillie',
      subtitle: 'Turn it Up Pants',
      price: 120,
      colors: ['#0C0C0C', '#CA2929', '#748C70'],
      bestseller: false,
      inStock: true,
      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 7,
      mainImg: '',
      collection: '',
      title: 'Casual Wild Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      colors: ['#D0A5EA', '#909225'],
      bestseller: true,
      inStock: true,

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 8,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      colors: ['#D0A5EA', '#909225'],
      bestseller: false,
      inStock: true,
      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 9,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      colors: ['#D0A5EA', '#909225'],
      bestseller: true,
      inStock: true,

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 10,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 140,
      colors: ['#D0A5EA', '#909225'],
      bestseller: false,
      inStock: true,

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 11,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      colors: ['#D0A5EA', '#909225'],
      bestseller: false,
      inStock: true,

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 12,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      colors: ['#D0A5EA', '#909225'],
      bestseller: false,
      inStock: true,

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 13,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      bestseller: false,
      inStock: true,

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });

    server.create('product', {
      id: 14,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      bestseller: false,
      inStock: true,
      colors: ['#0C0C0C'],
      sizes: ['m', 'l'],

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 15,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      bestseller: false,
      inStock: true,
      colors: ['#0C0C0C'],
      sizes: ['m', 'l'],

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 16,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      bestseller: false,
      inStock: true,
      colors: ['#0C0C0C'],
      sizes: ['m', 'l'],

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 17,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      bestseller: false,
      inStock: true,
      colors: ['#0C0C0C'],
      sizes: ['m', 'l'],

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 18,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      bestseller: false,
      inStock: true,

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 19,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      bestseller: false,
      inStock: true,

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 20,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      bestseller: false,
      inStock: true,

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 21,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      bestseller: false,
      inStock: true,

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 22,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      bestseller: false,
      inStock: true,

      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });
    server.create('product', {
      id: 23,
      mainImg: '',
      collection: '',
      title: 'Line Wide Leg',
      subtitle: 'Turn it Up Pants',
      price: 110,
      bestseller: false,
      inStock: true,
      material: {
        type: 'Silk',
        description:
          'This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)',
        properties: ['Quick Dry', 'Chemical Free', 'Machine Washable'],
      },
      imgs: ['', '', ''],
      description: [
        {
          title: 'Fitting',
          property: [{ title: 'Fitting', about: 'Waiting...' }],
        },
        {
          title: 'Fabric & Care',
          property: [
            { title: 'Fabric', about: 'Tailored Stretch, Made in Italy62% Nylon, 38% Elastane, 100% vegan materials' },
            {
              title: 'Care',
              about: 'Cold machine wash, line dry Do not tumble dry or dry clean, Do not use bleach or fabric softener',
            },
          ],
        },
        {
          title: 'Product Detail',
          property: [{ title: 'Details', about: 'Waiting...' }],
        },
        {
          title: 'Shipping And Return',
          property: [
            { title: 'Shipping', about: 'is free on US , Canada orders are $175' },
            {
              title: 'Returns',
              about:
                'Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.',
            },
          ],
        },
      ],
    });

    server.create('modiweek', {
      id: 1,
      mainImg: '',
      title: 'Monday',
    });
    server.create('modiweek', {
      id: 2,
      mainImg: '',
      title: 'Tuesday',
    });
    server.create('modiweek', {
      id: 3,
      mainImg: '',
      title: 'Wednesday',
    });
    server.create('modiweek', {
      id: 4,
      mainImg: '',
      title: 'Thursday',
    });
    server.create('modiweek', {
      id: 5,
      mainImg: '',
      title: 'Friday',
    });
    server.create('modiweek', {
      id: 6,
      mainImg: '',
      title: 'Saturday',
    });
    server.create('modiweek', {
      id: 7,
      mainImg: '',
      title: 'Sunday',
    });
  },

  routes() {
    this.namespace = 'api';
    this.logging = false;
    this.timing = 1000;

    this.get('/products', (schema, request) => {
      const paramsKey = Object.keys(request.queryParams);
      const baseURL = 'https://www.baseURL.com';
      const params = new URLSearchParams(new URL(request.url, baseURL).search);
      const filters = {};

      for (const [key, value] of params.entries()) {
        filters[key] = [...(filters?.[key] ?? []), value];
      }

      const pageSize = 10;

      const { page, query, ...restFilters } = filters;

      const currentPage = Array.isArray(page) && page.length > 0 ? Number(page[0]) : 1;

      const getPageRange = (products) => {
        const totalCount = products.models.length;

        let productsPageEnd = currentPage * pageSize;

        const productsPageStart = productsPageEnd - pageSize;

        const hasNotFullLastPage = productsPageEnd - totalCount;

        productsPageEnd = hasNotFullLastPage > 0 ? totalCount : productsPageEnd;

        return { productsPageStart, productsPageEnd, totalCount };
      };

      let products = isEmpty(restFilters)
        ? schema.products.all()
        : schema.products.where((p) => {
            const f = Object.entries(restFilters).map(([filterName, filterValue]) => {
              const productValue = p?.[filterName];

              if (typeof productValue === 'boolean') {
                return filterValue.find((v) => productValue === JSON.parse(v)) !== undefined;
              }

              if (Array.isArray(productValue)) {
                return typeof filterValue.find((v) => productValue?.includes(v)) === 'string';
              }

              return false;
            });

            return !f.includes(false);
          });

      products = query
        ? products.filter((p) => {
            const { title, subtitle } = p.attrs;
            console.log();

            return [title, subtitle].find((s) => s.toLowerCase().includes(query?.[0]?.toLowerCase()));
          })
        : products;

      if (paramsKey.includes('bestseller')) {
        return { products: schema.products.where({ bestseller: true }) };
      }

      const { productsPageStart, productsPageEnd, totalCount } = getPageRange(products);

      const pageNumber = Math.ceil(totalCount / pageSize);

      return {
        products: products.slice(productsPageStart, productsPageEnd),
        pagination: { pageSize, totalCount, currentPage: currentPage > pageNumber ? 1 : currentPage },
      };
    });

    this.get('/products/:id', (schema, request) => {
      const id = request.params.id;

      return { product: schema.products.find(id).attrs };
    });

    this.get('/modiweeks', (schema) => {
      return schema.modiweeks.all();
    });
  },
});
