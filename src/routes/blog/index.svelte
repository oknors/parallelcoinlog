<script context="module">
  export async function preload() {
    let posts =  await this.fetch(`https://api.okno.rs/data/log/posts`).then(res => res.json())
      return { posts };
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>ulwlu's blog</title>
  <meta property="og:title" content="ParallelCoin's blog">
</svelte:head>
<div class='blog'>
{#each posts as post}
  <div class='card'>
    <div class='meta'>
      <span class='date'>{post.pubdate}</span>
    </div>
    <a rel='prefetch' class='title' href='blog/{post.Slug}'>{post.Title}</a>
  </div>
{/each}
</div>
