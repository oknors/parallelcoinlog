const lookup = new Map();

export async function get(req, res, next) {
  const { slug } = req.params;

  if (process.env.NODE_ENV !== 'production' || !lookup.has(slug)) {
    // const post = getPost(slug);
    let post =  await this.fetch(`https://api.okno.rs/data/log/posts/${slug}`).then(res => res.json())

    lookup.set(slug, JSON.stringify(post));
  }

  if (lookup.has(slug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
      message: `Not found`
    }));
  }
}
