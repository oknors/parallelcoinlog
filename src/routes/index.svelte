<script context="module">
  export async function preload() {
    let posts =  await this.fetch(`https://api.okno.rs/data/log_parallelcoin_info/posts`).then(res => res.json())
    return { posts };
  }
</script>


<script>
  export let posts;
</script>

<svelte:head>
  <title>ParallelCoin's log</title>
  <meta property="og:title" content="ParallelCoin's log">
</svelte:head>
<div class='blog'>
{#each posts as post}
  <div class='card'>
    <div class='meta'>
      <span class='date'>{post.Date}</span>
    </div>
    <a rel='prefetch' class='title' href='{post.Slug}'>{post.Title}</a>
  </div>
{/each}
</div>
