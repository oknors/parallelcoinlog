<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @font-face {
      font-family: 'bariollight';
      src: url('https://s.okno.rs/font/bariol/bariol-light-webfont.woff2') format('woff2'),
      url('https://s.okno.rs/font/bariol/bariol-light-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'bariolregular';
      src: url('https://s.okno.rs/font/bariol/bariol-regular-webfont.woff2') format('woff2'),
      url('https://s.okno.rs/font/bariol/bariol-regular-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'bariolbold';
      src: url('https://s.okno.rs/font/bariol/bariol-bold-webfont.woff2') format('woff2'),
      url('https://s.okno.rs/font/bariol/bariol-bold-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'plan9regular';
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src:
              local('plan9regular '),
              local('plan9regular'),
              url('https://s.okno.rs/font/plan9/plan9.woff2') format('woff2'),
              url('https://s.okno.rs/font/plan9/plan9.woff') format('woff');
  }

  body {
      font-family: 'bariolregular';
    @apply text-sm sm:text-lg leading-normal;
    background: theme('colors.light.bg');
    color: theme('colors.light.fg');
    .dark & {
      background: theme('colors.dark.bg');
      color: theme('colors.dark.fg');
    }
  }

  h1,h2, h3, h4, h5, h6 {
      font-family: 'plan9regular';
      margin: 0;
  }

  h1,
  h2,
  h3,
  p,
  pre {
    @apply leading-normal my-4;
  }

  h1 {
    @apply text-center text-lg sm:text-3xl mt-8 mb-8;
  }

  h2 {
    @apply text-lg sm:text-xl mt-8 font-semibold border-b border-solid;
    border-color: theme('colors.light.bg_border');
    .dark & {
      border-color: theme('colors.dark.bg_border');
    }
  }

  h3 {
    @apply text-base sm:text-lg;
  }

  a {
    @apply underline;
  }

  pre {
    @apply whitespace-pre-wrap;
  }

  .blog {
    @apply text-lg sm:text-xl max-w-lg ml-auto;
  }

  .card {
    @apply my-8;
  }

  .meta {
    @apply flex;
    color: theme('colors.light.meta');
    .dark & {
      color: theme('colors.dark.meta');
    }
  }

  .date {
    @apply text-xs;
    color: theme('colors.light.meta');
    .dark & {
      color: theme('colors.dark.meta');
    }
  }

  .title {
    @apply m-auto max-w-xl no-underline;
  }

  #profile-wrapper {
    @apply max-w-md mx-auto my-0;
  }

  main {
    @apply max-w-2xl py-0 px-8 my-0 mx-auto box-border relative;
  }

  header {
    @apply text-center mt-5;
    a {
      @apply text-base sm:text-xl mt-5 sm:mt-8 font-semibold no-underline;
    }
  }

  footer {
    @apply text-center mt-16;
    button {
      @apply border-b border-solid leading-none opacity-50 absolute -right-0;
      &:focus {
        @apply outline-none;
      }
    }
  }

  table {
    @apply w-full overflow-auto border-collapse;
    th {
      @apply font-semibold;
    }
    td, th {
      @apply py-2 px-4 border border-solid;
      border-color: theme('colors.light.table_border');
      .dark & {
        border-color: theme('colors.dark.table_border');
      }
    }
  }


</style>
