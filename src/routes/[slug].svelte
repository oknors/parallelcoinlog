<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`https://api.okno.rs/data/log_parallelcoin_info/posts/${params.slug}`);
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>


<script>
  import Title from '../components/Title.svelte';

  export let post;
</script>

<svelte:head>
  <title>{post.Title}</title>
  <meta property="og:title" content="{post.Title}">
</svelte:head>
<div class='title'>
  <Title title="{post.Title}"></Title>
</div>
<div class='content'>
  {@html post.Content}
</div>
<div class='meta'>
  <p class='date'>{post.Date}</p>
</div>
