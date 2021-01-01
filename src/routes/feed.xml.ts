import posts from '@posts'
import RSS from 'rss-generator'

const feed = new RSS({
  title: `OKNO`,
  description: `Okno je otvor, prolaz.`,
  feed_url: `http://okno.rs/feed.xml`,
  site_url: `http://okno.rs`,
  pubDate: posts[0].date.toISOString(),
})

posts.slice(0, 5).forEach(p =>
  feed.item({
    title: p.title,
    description: p.summary,
    url: `http://okno.rs/blog/${p.slug}`,
    guid: p.slug,
    categories: p.tags,
    author: p.author,
    date: +p.date,
  })
)

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/xml',
  })

  res.end(feed.xml({ indent: true }))
}
