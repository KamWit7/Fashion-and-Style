/* eslint-disable @typescript-eslint/no-unused-vars */
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    products: Model,
    modiweeks: Model,
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
    });

    server.create('product', {
      uid: 2,
      img: 'https://s3-alpha-sig.figma.com/img/d5e5/f24b/527834489346f983b00b7694764c987d?Expires=1698019200&Signature=lt-Bw8mLKx6NQww5r5Fl4r6B0mtPEmlY6xyW6TNSb71t3GvMZL6oWxBhQ4aGE89H0KXu4qIRxeaqAAzBC2vI4d6uZRjIKchUdNGMifUR~rGU2PkuZaFKovXsqjwPWV4Ykt6QIzUrP0mojCyc1R~7BJS3W8Iv-wsiNhyIYZKr0d2e6WWoafSgz23LQzZIdnG8dEq6OfSQyTkZ4Ipeg0NDhONiXcQpM3RCfIbg7ACUud5Q6pGo4p6udS9jbVsMCXY9UiKgQ5vp93EChVHDs5-ZgXFqQjPwe6ahQ76TD5r6TTeouYluCbxvkIaT00ajOp1clV3QALN6y4wvHBLmhGEZpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      collection: '',
      title: 'Technical Silk',
      subtitle: 'Make a Splash',
      price: 120,
      variants: ['bg-[#909225]', 'bg-[#19418E]', 'bg-black'],
      bestseller: true,
    });
    server.create('product', {
      uid: 3,
      img: 'https://s3-alpha-sig.figma.com/img/6860/8864/caedfff6f199090866e9fe1b5997ca26?Expires=1698019200&Signature=I9HNxiLV-4gAt75V1abTHlg5-~LojeUTjze17gHVPIbk0M6B1mrJqQW4tcB3M-~RJMddUGPdJKvCkl7jEWozFAAHGcR~Y1psSdVqYvf4TZ5gH~nYV6nIiEtlqR4bkBJ~ochAuOe2S8d5kaglaMk4PB~3vvQrac5S6mwrv2jjpx1ZhUqiJB8nroANDJ8jnUByLEpl0L-xEE5Ok8rd-4vGvkoIpSpdcxRys7lUS0luCwc07TNAUea67VoexJ9G~9-Zv85yGxFheAoj-9YK13CqzLBU00Qk3VqD3kV7iugjoLyDK1zTZ0busyOSbWe6l0evByDFOQ1TnQ8kv6mvJ9F2qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      collection: '',
      title: 'Cool Weave',
      subtitle: 'Anywhere Dress',
      price: 210,
      variants: ['bg-[#D0A5EA]', 'bg-[#909225]', 'bg-[#748C70]'],
      bestseller: true,
    });
    server.create('product', {
      uid: 4,
      img: 'https://s3-alpha-sig.figma.com/img/c170/9b47/8ad164ca200a9d831292b1f8aa20e330?Expires=1698019200&Signature=EOha4SgQWmBOh89Q7kuWOMHw7b~dhnwmTTOll0zR4SiNaw6QGimWgLvhBMuEOtCcSxBKvYOvU0Q0jSZapxX8KFKprnE01w452~lFCn0006nWGvwZSaFrPxaVZJBhqMqVC8WL69dD1L3rtW52mdBJ9hQh3v27mnY4CP7jYSsFxo5fR7wss1msXi5zkfM6jOFbamoSkB1wuRA8vnsg6ngMzwTpKc3kzwAHyq-0Fpffi0h~pKOD~IOvvtvCb8ivvu3uYjk3A1FrwjYEnh1zZmYZig6zGds8F-o5IFd72o4wtpbxAA3nJklexZRCrQId2J3rEnJovQh0pyhOEN7EAO6LKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      collection: '',
      title: 'Elastic Waist',
      subtitle: 'Turn it Up Pants',
      price: 110,
      variants: ['bg-[#D0A5EA]', 'bg-[#909225]'],
      bestseller: true,
    });
    server.create('modiweek', {
      uid: 1,
      img: 'https://s3-alpha-sig.figma.com/img/47db/fd79/c6b95428bbbaa4151b79b1371e32ef3c?Expires=1698019200&Signature=Um3QJ4q9k1QPygqB7F36HeLCHZPp3c4-cJz95As9H3wSWgpGrBhfypUk9xaI4BeWsJGIdiz~BebsqP7xV802Ws-saIPTgifpmHJ95cKyjAZq1I~Ex5TxF0Ys7kbx2a4L3MRziWS8bEFSR7Yt-LD36epomhzd18J16TPzvf1i0xNOgb0MMV8WAFiXxZbYFGOedpZa9PciPgKBeFzx6BRV5MxSxeAy1AJ8Dj9E5igGsK1syzNgVRHi6N~5sGibgAek9wLuJSVXD-YP1HY5QMR3BiPAAG~Ncj1L4-jCyCZiQNfEcrx8cOqIXbX9NbPgOrh6FwDTJgEUkr5~qonoo8oXCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Monday',
    });
    server.create('modiweek', {
      uid: 2,
      img: 'https://s3-alpha-sig.figma.com/img/9837/81cf/4566146f7e076271e6a38076e1a0f454?Expires=1698019200&Signature=Pr8bNVcNKMfbxuRjGfWsyuHCzLiMvzS243o5CeYDiLEPjFrlPIl9eeufjdCW8KbxBwz8WpqZLjra1c70DS8NS0g3iLj2q9~50iEkr92~7Qw8niemrW93JK2OHv7DwVK1asteSa1BgnXKDajiKVhjsAfxGKU~tIZQQbDDPnoGvnBD1-fhlAuhlL1q101EKcY~lLJG9o-dZIyanTmyh~Miw588PSzD0XDqAFB3AF8en~J7rBVxkjOAl1hwK~4lx~Y9PKQYTxGyQD9y6zv17VFgOaSJuOAEmaJ2G565x3uQanmJt~OmIr7t5q5Xzb6b9ipg1wd-8ySIok2jaQezIxfHYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Tuesday',
    });
    server.create('modiweek', {
      uid: 3,
      img: 'https://s3-alpha-sig.figma.com/img/06aa/e4d5/926c1cd903beb633f085b86f962325a3?Expires=1698019200&Signature=lCyQQrLIg9JR96Nh1kl3jj62rQgaLyvWpreOQnOkTWuI~oz~DUabg6jqyMuHdFqbXmVS6Mu6rByvuC4O83lSMuwqMh8F3OnbreGynwTBsbqxymclTh-1Af30UdGdmlMxN7BPMY~tlbVeI1pL7hYQSikUeE1dHm9k6FdQlDzg7zMM-LyoHl8-2bVu3wbDw81ClsPUFqpbCLV-va3Rn5JKObVHzDU5t21BZLIhbgHZaHXB-1Sqd1dPDpfc85CobJgonBa7vmlbMHAXMWd2iYdT0KxPj07A~TJLvTWeoXYbvuMmJrFSY20GoT0ExNbJh7spN3GnSwbTDbHHbXsyt9XFrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Wednesday',
    });
    server.create('modiweek', {
      uid: 4,
      img: 'https://s3-alpha-sig.figma.com/img/fa7f/e57a/40471af0f1a8b7063b5d79ec574a7c11?Expires=1698019200&Signature=k~CdD56r-dmizEd0rsqGbdE0n2-tljvLsVBNYIoSAumXHMccFWELKemAubXCJ~kuOnZkj8LjPv8D2ngp3g1nIAYfH30o0At~F7mvRl3j8VxwtqhFwKxWjYrpcDdD3DHdiZhd4aD~d08QBTRWstn7MlzKM~soZ96OFAx7Shtt~qqVUGfbOa1eE1EClGZCLuLUmp61YYWDnOtkYYjDP01gPBiyV0OoIYaQWSXenKotFXtJVYJ0xR8zRkvnZu77vNte~ykVZPF4b0dNR4jBjodePQqBJAMBu~-KzkF8GnTRtKlbwyQIXcj0~G2cI-oSbGrIGrCdlCBGmY1BsYLDY5H6kA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Thursday',
    });
    server.create('modiweek', {
      uid: 5,
      img: 'https://s3-alpha-sig.figma.com/img/9d9f/f4b3/43c6ec950877c8232a27898f114312ac?Expires=1698019200&Signature=CM~k1WYdV4619PYJpcgu7OUq97muzAOogT4-OTnNnDR9esw0URdVQAqzTPfa51aZ2jJRBSNWNeSIwttb67X0hqflZSh8t2Js63EVwQmisjXF93xck0C0WNpQFMD8nDRXodYPVyQTA72NlasaQCkPcOx56BGfdy8NCDE6IYIE69pfhA8OLHJmvNxey2pN9DCxsnqWh00Rv1yMOYEv8fw6YNTS6ixoNG38ymf5vMZ41woLrk46a7IGh9n2-xbYEUClkVEP~Jns1~Gdel59IGeH6F04YEPI3ZWgbfDgTHIoif3v7FdHSOuX79ooHl4J7nAzGIksPoDza6KE4G8BNDed7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Friday',
    });
    server.create('modiweek', {
      uid: 6,
      img: 'https://s3-alpha-sig.figma.com/img/9837/81cf/4566146f7e076271e6a38076e1a0f454?Expires=1698019200&Signature=Pr8bNVcNKMfbxuRjGfWsyuHCzLiMvzS243o5CeYDiLEPjFrlPIl9eeufjdCW8KbxBwz8WpqZLjra1c70DS8NS0g3iLj2q9~50iEkr92~7Qw8niemrW93JK2OHv7DwVK1asteSa1BgnXKDajiKVhjsAfxGKU~tIZQQbDDPnoGvnBD1-fhlAuhlL1q101EKcY~lLJG9o-dZIyanTmyh~Miw588PSzD0XDqAFB3AF8en~J7rBVxkjOAl1hwK~4lx~Y9PKQYTxGyQD9y6zv17VFgOaSJuOAEmaJ2G565x3uQanmJt~OmIr7t5q5Xzb6b9ipg1wd-8ySIok2jaQezIxfHYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Saturday',
    });
    server.create('modiweek', {
      uid: 7,
      img: 'https://s3-alpha-sig.figma.com/img/47db/fd79/c6b95428bbbaa4151b79b1371e32ef3c?Expires=1698019200&Signature=Um3QJ4q9k1QPygqB7F36HeLCHZPp3c4-cJz95As9H3wSWgpGrBhfypUk9xaI4BeWsJGIdiz~BebsqP7xV802Ws-saIPTgifpmHJ95cKyjAZq1I~Ex5TxF0Ys7kbx2a4L3MRziWS8bEFSR7Yt-LD36epomhzd18J16TPzvf1i0xNOgb0MMV8WAFiXxZbYFGOedpZa9PciPgKBeFzx6BRV5MxSxeAy1AJ8Dj9E5igGsK1syzNgVRHi6N~5sGibgAek9wLuJSVXD-YP1HY5QMR3BiPAAG~Ncj1L4-jCyCZiQNfEcrx8cOqIXbX9NbPgOrh6FwDTJgEUkr5~qonoo8oXCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Sunday',
    });
  },

  routes() {
    this.namespace = 'api';
    this.logging = false;
    this.timing = 1000;

    this.get('/products', (schema, request) => {
      const query = Object.keys(request.queryParams);

      if (query.includes('bestseller')) {
        return schema.products.where({ bestseller: true });
      }

      return schema.products.all();
    });
    this.get('/modiweeks', (schema) => {
      return schema.modiweeks.all();
    });
  },
});
