/* eslint-disable @typescript-eslint/no-unused-vars */
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    products: Model,
  },

  seeds(server) {
    server.create('product', {
      uid: 1,
      img: 'https://s3-alpha-sig.figma.com/img/2a1b/ae81/2e81613b401c4689b9ced6df9a3b631a?Expires=1698019200&Signature=YwCCiXLgx-MxfTOkdqcYKv8wODGFJUd2sFvgspjtYoOU~mfgxTpen0ODBljSVHFZh8HZY8fsMTIbaMmHRbqFxs07xeMnUYduBHDkUolClJw8~6bMRs4peygyo08AtuC5zgaHKclDLw-H8B3RgZaWtlNre~7WWfK7LOQKHSVYHDHQfTDIc8XvuTEy6USJkumFHJ3V43JUZripBGawNX1Ab4woY4HJZ7rBG0euQIqp2aDit4nKos--9vraUSLTxGjuuWs4zRJG1k2CwxAvQUrDqyIJgmYNonU2u8atBOBKmaQUdHN7Dqyyc9806bEdnNWvYyrjNpgTiQVd835x739gTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      collection: '',
      title: 'Tailored Stretch',
      subtitle: 'Turn it Up Pants',
      price: 180,
      variants: ['bg-black ', 'bg-blue-600', 'bg-pink-500'],
      bestseller: true,
    })

    server.create('product', {
      uid: 2,
      img: 'https://s3-alpha-sig.figma.com/img/d5e5/f24b/527834489346f983b00b7694764c987d?Expires=1698019200&Signature=lt-Bw8mLKx6NQww5r5Fl4r6B0mtPEmlY6xyW6TNSb71t3GvMZL6oWxBhQ4aGE89H0KXu4qIRxeaqAAzBC2vI4d6uZRjIKchUdNGMifUR~rGU2PkuZaFKovXsqjwPWV4Ykt6QIzUrP0mojCyc1R~7BJS3W8Iv-wsiNhyIYZKr0d2e6WWoafSgz23LQzZIdnG8dEq6OfSQyTkZ4Ipeg0NDhONiXcQpM3RCfIbg7ACUud5Q6pGo4p6udS9jbVsMCXY9UiKgQ5vp93EChVHDs5-ZgXFqQjPwe6ahQ76TD5r6TTeouYluCbxvkIaT00ajOp1clV3QALN6y4wvHBLmhGEZpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      collection: '',
      title: 'Technical Silk',
      subtitle: 'Make a Splash',
      price: 120,
      variants: ['bg-[#909225]', 'bg-[#19418E]', 'bg-black'],
      bestseller: true,
    })
    server.create('product', {
      uid: 3,
      img: 'https://s3-alpha-sig.figma.com/img/6860/8864/caedfff6f199090866e9fe1b5997ca26?Expires=1698019200&Signature=I9HNxiLV-4gAt75V1abTHlg5-~LojeUTjze17gHVPIbk0M6B1mrJqQW4tcB3M-~RJMddUGPdJKvCkl7jEWozFAAHGcR~Y1psSdVqYvf4TZ5gH~nYV6nIiEtlqR4bkBJ~ochAuOe2S8d5kaglaMk4PB~3vvQrac5S6mwrv2jjpx1ZhUqiJB8nroANDJ8jnUByLEpl0L-xEE5Ok8rd-4vGvkoIpSpdcxRys7lUS0luCwc07TNAUea67VoexJ9G~9-Zv85yGxFheAoj-9YK13CqzLBU00Qk3VqD3kV7iugjoLyDK1zTZ0busyOSbWe6l0evByDFOQ1TnQ8kv6mvJ9F2qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      collection: '',
      title: 'Cool Weave',
      subtitle: 'Anywhere Dress',
      price: 210,
      variants: ['bg-[#D0A5EA]', 'bg-[#909225]', 'bg-[#748C70]'],
      bestseller: true,
    })
    server.create('product', {
      uid: 4,
      img: 'https://s3-alpha-sig.figma.com/img/c170/9b47/8ad164ca200a9d831292b1f8aa20e330?Expires=1698019200&Signature=EOha4SgQWmBOh89Q7kuWOMHw7b~dhnwmTTOll0zR4SiNaw6QGimWgLvhBMuEOtCcSxBKvYOvU0Q0jSZapxX8KFKprnE01w452~lFCn0006nWGvwZSaFrPxaVZJBhqMqVC8WL69dD1L3rtW52mdBJ9hQh3v27mnY4CP7jYSsFxo5fR7wss1msXi5zkfM6jOFbamoSkB1wuRA8vnsg6ngMzwTpKc3kzwAHyq-0Fpffi0h~pKOD~IOvvtvCb8ivvu3uYjk3A1FrwjYEnh1zZmYZig6zGds8F-o5IFd72o4wtpbxAA3nJklexZRCrQId2J3rEnJovQh0pyhOEN7EAO6LKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      collection: '',
      title: 'Elastic Waist',
      subtitle: 'Turn it Up Pants',
      price: 110,
      variants: ['bg-[#D0A5EA]', 'bg-[#909225]'],
      bestseller: false,
    })
  },

  routes() {
    this.namespace = 'api'
    this.logging = false
    this.timing = 1000

    this.get('/products', (schema, request) => {
      const query = Object.keys(request.queryParams)

      if (query.includes('bestseller')) {
        return schema.products.where({ bestseller: true })
      }

      return schema.products.all()
    })
  },
})
