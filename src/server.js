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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/8bb3/b7c7/f86966a30bfd227b06f0880f25b4dfa9?Expires=1699228800&Signature=qy0dQmPAeh819Yt9oLU1OBNWgWLiAQPHfn2JnrKJK1VeKLPUt0UokSpb9tzW~XucMksh3D174lDGdYKzxdKnO2Ghdz8BmE8BWdb1Wp6MNrC5uuwGkaqgKplnAimNl6h~R8S4ECwrtYpi6IntZGVLtqMJL6XsEFj6YLZk3YZaOOy1Ms4PDVlFNy6hRUYDBdcglNF~t0b0o4MN0cKYQi5sg5dxXct9ZtIW3sVZLN2-PVfZW5H85PoGN06xfmnVdvbd68Xw8unekQppI~zTGVQDaxmovxfKr8N4bIU4imthgyDCex~Bg12lkySs1mLA92plFLjq6f0ZR18bgnTHfKk8eA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/d5e5/f24b/527834489346f983b00b7694764c987d?Expires=1698019200&Signature=lt-Bw8mLKx6NQww5r5Fl4r6B0mtPEmlY6xyW6TNSb71t3GvMZL6oWxBhQ4aGE89H0KXu4qIRxeaqAAzBC2vI4d6uZRjIKchUdNGMifUR~rGU2PkuZaFKovXsqjwPWV4Ykt6QIzUrP0mojCyc1R~7BJS3W8Iv-wsiNhyIYZKr0d2e6WWoafSgz23LQzZIdnG8dEq6OfSQyTkZ4Ipeg0NDhONiXcQpM3RCfIbg7ACUud5Q6pGo4p6udS9jbVsMCXY9UiKgQ5vp93EChVHDs5-ZgXFqQjPwe6ahQ76TD5r6TTeouYluCbxvkIaT00ajOp1clV3QALN6y4wvHBLmhGEZpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/6860/8864/caedfff6f199090866e9fe1b5997ca26?Expires=1698019200&Signature=I9HNxiLV-4gAt75V1abTHlg5-~LojeUTjze17gHVPIbk0M6B1mrJqQW4tcB3M-~RJMddUGPdJKvCkl7jEWozFAAHGcR~Y1psSdVqYvf4TZ5gH~nYV6nIiEtlqR4bkBJ~ochAuOe2S8d5kaglaMk4PB~3vvQrac5S6mwrv2jjpx1ZhUqiJB8nroANDJ8jnUByLEpl0L-xEE5Ok8rd-4vGvkoIpSpdcxRys7lUS0luCwc07TNAUea67VoexJ9G~9-Zv85yGxFheAoj-9YK13CqzLBU00Qk3VqD3kV7iugjoLyDK1zTZ0busyOSbWe6l0evByDFOQ1TnQ8kv6mvJ9F2qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/c170/9b47/8ad164ca200a9d831292b1f8aa20e330?Expires=1698019200&Signature=EOha4SgQWmBOh89Q7kuWOMHw7b~dhnwmTTOll0zR4SiNaw6QGimWgLvhBMuEOtCcSxBKvYOvU0Q0jSZapxX8KFKprnE01w452~lFCn0006nWGvwZSaFrPxaVZJBhqMqVC8WL69dD1L3rtW52mdBJ9hQh3v27mnY4CP7jYSsFxo5fR7wss1msXi5zkfM6jOFbamoSkB1wuRA8vnsg6ngMzwTpKc3kzwAHyq-0Fpffi0h~pKOD~IOvvtvCb8ivvu3uYjk3A1FrwjYEnh1zZmYZig6zGds8F-o5IFd72o4wtpbxAA3nJklexZRCrQId2J3rEnJovQh0pyhOEN7EAO6LKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/056b/73fd/7a1fad28c3196ff6ab02239e7d4d1810?Expires=1698624000&Signature=FeeRDTGRAwXDVa-4e0pbHdqE1gw5LjemHVPrlvP1KEs3AJl2LH9x-lNVkeK9cmhgSojKhgZ4RdA4XQGZnC~xG32jnX0KoxJIBoJ03Hw8cGM-6apfahCExGEMtJMYSZ3nKONcIW1uIDJTgZEbKqbH3Kw206FGFtxLUt-H5BlAF3Nf~HS8F8~QbYyu8b1fV9hkE-hbRJTE58PPTjfvKPZ7RvWtxp56YGlceSaRzYcq8kUHosohI6RzOlTngRncrkqtTl5WUYtD0YVi~TQuf9V6Hr9R8ANZDHizqu9Kr4EC7YaS4GrEeoAOyv8VvZpO97TB--h24rA2j-6FEkAbTrZTXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/2c5e/786c/409340c23aabab40d371256cf856a868?Expires=1698624000&Signature=AsCIOcYgubLEGq21~w34bzaN3atMG~0hGhILVbj0zygKHgAVxMaGR03N23yi-UsdzfU3nuWNkWaKb61iDpwCeai2wdJfwWw~GkBEICidoWTxTtlqssKzGxJ6GoNmodRRgPrPe2DTgMJpp2~e0H6eJWfGcT3vxVIWi3wdOmfSemNvPwaXqofU2UIgNngKm1r2AjyESNGoJcE7k222xvSxDf6AZZKRMa~ubI~Kv4tFyCajQUK4I8~O1LaYVtmLTohZ9N8tuur5jfIJV5pOJx37OoTtd8yeZPfOaY7xv2d5bMP0HSLA5sV1moeUC8xSBCiVapp7f5MZsMl4oG49LoVnAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/53f0/d4a4/89cafc359eb969c39bb2349be2e338ad?Expires=1698624000&Signature=g6Sf3D4klvTrpAAL57t3Xyjkps-1P5HEuJ1lUDuI2huELLG~h0l8TDemFiPaKAewlKpVGbpgeRArCy9SbL0ArSWB-Ud7LzXlzOdX1IGWQFwUoMfhegJ8MDb068K4SdOz2lGY7I8U1STku-Ss0T0krQVWAFgPP8xiWb7HUWG8APxHNgPka7JfxcIXnb5yzwa0TjwIUtC0Mq2QpsYiqxEmRJZeVl4lZJa-jBmfeDO2WCj3lhc1E4achEqo5D8nfowMi4YQcUve8jQq0kSZhqrB3Xn9NZfQCbvjYC1llSAeNQUL0TkUN3a0RHm-ncO4ngg0zvBseScy~JuiIKYn8DRJGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/209f/58fe/1ecd1413ad2774d90d07d469a39cf165?Expires=1698624000&Signature=TqhTuXOD04nFfSaYDwgARw7htB8x7PCKzctTAEh4VMeKhhWigX-O74jpoOtBfWYn1G0sd94GWO8G8KpS0GdfZycf0wzECVFYJAFAYoeSKHPpfGQFN8ewmcaBJXxvuS6L-B7VhzBSp2RcDHB9nMTw20~ks0K2-o0Gx-SDS4j5cSDdVG2RIHdrFjQZv58Z6i74r8wc-b6rBbZV6pAr7YR41d2h6W7Ek6I-DPkS2K4DMLZEkF-nXHNgIWhxItmKNTRHkyumng~6epu5RMtg8NZ6HQnbJm~CWn5SQCNnseGA5EMzoIUhBU4F7MYnwgQkgHKD2D8r0ndU2hY2g-1TbHwN2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imgs: [
        'https://s3-alpha-sig.figma.com/img/5fd8/f5fe/243abda556dc92fbb9c2b5843e8212ca?Expires=1699228800&Signature=NuoBqsTzAL77N0~fQMA9qn~nScjm26vcYOM3eD7VZ~tMUTUgrC14Y75-yjlm2kZbTijkXMTFEToxumQf2lCEMgFTNSlS8VgMWGvyUED~iO5Zp~paniNoMN69LPUTUoJfoGk1phIlQihTKKOGBHEHjpFE5KPbdjfvzDc3oIUxKJ1pfVBJmX0QxSq3IkB36du9paWftcJU8oJK87I0odAqLAHcd1tzAx9RlfwgPPbvQpz8tGHOlo5kPpf2LS6ASUpuxHdJWu4XXoghkWLAGfl~SodKxTdY0PoCiMW4YMC69WybnIuuAFBF2akPSk-NGl9xZqPSc9qwijag7NlBQ46ZqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/7ca9/bcc9/a94d69510b2a85a8faa6209db890ba24?Expires=1699228800&Signature=VAPAvuuxelUf~hMW2PxGHYdfsBogm34~y7KoPJ5u6HCvs4sXO4bOs0xjNGEDBUN3hf6yqk42zgQ5WA4NrDertDo~QdxsfeBWmW7vlXl9wFDPfEvPtk065nvj0UUUj2ewECewuqZG0YfA4k6~KgyW2VWx-1a~e-vy3szwrv7NFgEPO20AocK8ISjCAWCkXdOyMzEkoTJ3vA9vJzZsdEAPHLqOd5HJBCMRytg4hsKUgys4f3O517uKuNGY4XIyNOOex6oL36~JkOd8-JzdJcLj5xTfBwhi9NG6RinnWbDlPLVr~OCMGx2jSV7Oxq0YdtgQxfxn8-n~yRR4jSN-mWw3BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'https://s3-alpha-sig.figma.com/img/0064/0f29/c64aebcf6fe540fd7ebc1fb817079775?Expires=1699228800&Signature=VeGmciwRjqwV1~2okrg8cBYgORtIoYqXkurP-~jNa5HhhqLiYYNwXKWqUF0vYP2ftu4Bobw8091JI3l6xwna9ISvhR69tpmG615dffgQTY3qGOi9uwV4X93rXiYLzF~r9vSFM7F939Z5IVqTUWBZZUthnXVJfHbHhyxrQ4Bp6uUWOoHHekwz8p~l6LJZ8-T02kKSrnDMJYUUN-24RIDeAxlvYkjBo3GRm4neW-1EHC4MDELkambHnscNorEt2rbOoyaDM4KlFnchaYPUD~w4uRLp813qcw9EblPvf6MBnVCA4uJv-aDzvP93Q7ibL6bgQr5tzWHQhQJHo~18CBnKqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      ],
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
      mainImg:
        'https://s3-alpha-sig.figma.com/img/47db/fd79/c6b95428bbbaa4151b79b1371e32ef3c?Expires=1698019200&Signature=Um3QJ4q9k1QPygqB7F36HeLCHZPp3c4-cJz95As9H3wSWgpGrBhfypUk9xaI4BeWsJGIdiz~BebsqP7xV802Ws-saIPTgifpmHJ95cKyjAZq1I~Ex5TxF0Ys7kbx2a4L3MRziWS8bEFSR7Yt-LD36epomhzd18J16TPzvf1i0xNOgb0MMV8WAFiXxZbYFGOedpZa9PciPgKBeFzx6BRV5MxSxeAy1AJ8Dj9E5igGsK1syzNgVRHi6N~5sGibgAek9wLuJSVXD-YP1HY5QMR3BiPAAG~Ncj1L4-jCyCZiQNfEcrx8cOqIXbX9NbPgOrh6FwDTJgEUkr5~qonoo8oXCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Monday',
    });
    server.create('modiweek', {
      id: 2,
      mainImg:
        'https://s3-alpha-sig.figma.com/img/9837/81cf/4566146f7e076271e6a38076e1a0f454?Expires=1698019200&Signature=Pr8bNVcNKMfbxuRjGfWsyuHCzLiMvzS243o5CeYDiLEPjFrlPIl9eeufjdCW8KbxBwz8WpqZLjra1c70DS8NS0g3iLj2q9~50iEkr92~7Qw8niemrW93JK2OHv7DwVK1asteSa1BgnXKDajiKVhjsAfxGKU~tIZQQbDDPnoGvnBD1-fhlAuhlL1q101EKcY~lLJG9o-dZIyanTmyh~Miw588PSzD0XDqAFB3AF8en~J7rBVxkjOAl1hwK~4lx~Y9PKQYTxGyQD9y6zv17VFgOaSJuOAEmaJ2G565x3uQanmJt~OmIr7t5q5Xzb6b9ipg1wd-8ySIok2jaQezIxfHYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Tuesday',
    });
    server.create('modiweek', {
      id: 3,
      mainImg:
        'https://s3-alpha-sig.figma.com/img/06aa/e4d5/926c1cd903beb633f085b86f962325a3?Expires=1698019200&Signature=lCyQQrLIg9JR96Nh1kl3jj62rQgaLyvWpreOQnOkTWuI~oz~DUabg6jqyMuHdFqbXmVS6Mu6rByvuC4O83lSMuwqMh8F3OnbreGynwTBsbqxymclTh-1Af30UdGdmlMxN7BPMY~tlbVeI1pL7hYQSikUeE1dHm9k6FdQlDzg7zMM-LyoHl8-2bVu3wbDw81ClsPUFqpbCLV-va3Rn5JKObVHzDU5t21BZLIhbgHZaHXB-1Sqd1dPDpfc85CobJgonBa7vmlbMHAXMWd2iYdT0KxPj07A~TJLvTWeoXYbvuMmJrFSY20GoT0ExNbJh7spN3GnSwbTDbHHbXsyt9XFrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Wednesday',
    });
    server.create('modiweek', {
      id: 4,
      mainImg:
        'https://s3-alpha-sig.figma.com/img/fa7f/e57a/40471af0f1a8b7063b5d79ec574a7c11?Expires=1698019200&Signature=k~CdD56r-dmizEd0rsqGbdE0n2-tljvLsVBNYIoSAumXHMccFWELKemAubXCJ~kuOnZkj8LjPv8D2ngp3g1nIAYfH30o0At~F7mvRl3j8VxwtqhFwKxWjYrpcDdD3DHdiZhd4aD~d08QBTRWstn7MlzKM~soZ96OFAx7Shtt~qqVUGfbOa1eE1EClGZCLuLUmp61YYWDnOtkYYjDP01gPBiyV0OoIYaQWSXenKotFXtJVYJ0xR8zRkvnZu77vNte~ykVZPF4b0dNR4jBjodePQqBJAMBu~-KzkF8GnTRtKlbwyQIXcj0~G2cI-oSbGrIGrCdlCBGmY1BsYLDY5H6kA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Thursday',
    });
    server.create('modiweek', {
      id: 5,
      mainImg:
        'https://s3-alpha-sig.figma.com/img/9d9f/f4b3/43c6ec950877c8232a27898f114312ac?Expires=1698019200&Signature=CM~k1WYdV4619PYJpcgu7OUq97muzAOogT4-OTnNnDR9esw0URdVQAqzTPfa51aZ2jJRBSNWNeSIwttb67X0hqflZSh8t2Js63EVwQmisjXF93xck0C0WNpQFMD8nDRXodYPVyQTA72NlasaQCkPcOx56BGfdy8NCDE6IYIE69pfhA8OLHJmvNxey2pN9DCxsnqWh00Rv1yMOYEv8fw6YNTS6ixoNG38ymf5vMZ41woLrk46a7IGh9n2-xbYEUClkVEP~Jns1~Gdel59IGeH6F04YEPI3ZWgbfDgTHIoif3v7FdHSOuX79ooHl4J7nAzGIksPoDza6KE4G8BNDed7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Friday',
    });
    server.create('modiweek', {
      id: 6,
      mainImg:
        'https://s3-alpha-sig.figma.com/img/9837/81cf/4566146f7e076271e6a38076e1a0f454?Expires=1698019200&Signature=Pr8bNVcNKMfbxuRjGfWsyuHCzLiMvzS243o5CeYDiLEPjFrlPIl9eeufjdCW8KbxBwz8WpqZLjra1c70DS8NS0g3iLj2q9~50iEkr92~7Qw8niemrW93JK2OHv7DwVK1asteSa1BgnXKDajiKVhjsAfxGKU~tIZQQbDDPnoGvnBD1-fhlAuhlL1q101EKcY~lLJG9o-dZIyanTmyh~Miw588PSzD0XDqAFB3AF8en~J7rBVxkjOAl1hwK~4lx~Y9PKQYTxGyQD9y6zv17VFgOaSJuOAEmaJ2G565x3uQanmJt~OmIr7t5q5Xzb6b9ipg1wd-8ySIok2jaQezIxfHYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Saturday',
    });
    server.create('modiweek', {
      id: 7,
      mainImg:
        'https://s3-alpha-sig.figma.com/img/47db/fd79/c6b95428bbbaa4151b79b1371e32ef3c?Expires=1698019200&Signature=Um3QJ4q9k1QPygqB7F36HeLCHZPp3c4-cJz95As9H3wSWgpGrBhfypUk9xaI4BeWsJGIdiz~BebsqP7xV802Ws-saIPTgifpmHJ95cKyjAZq1I~Ex5TxF0Ys7kbx2a4L3MRziWS8bEFSR7Yt-LD36epomhzd18J16TPzvf1i0xNOgb0MMV8WAFiXxZbYFGOedpZa9PciPgKBeFzx6BRV5MxSxeAy1AJ8Dj9E5igGsK1syzNgVRHi6N~5sGibgAek9wLuJSVXD-YP1HY5QMR3BiPAAG~Ncj1L4-jCyCZiQNfEcrx8cOqIXbX9NbPgOrh6FwDTJgEUkr5~qonoo8oXCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
