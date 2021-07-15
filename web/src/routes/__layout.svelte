<script lang=ts>
  import Header from '$components/global/Header.svelte'
  import Footer from '$components/global/Footer.svelte'
</script>

<Header />
  <main>
    <!-- all page content renders here -->
    <slot/>
  </main>
<Footer />

<style>
  :global(:root){
    --light-blue: #5FE8FF;
    --blue: #00B1CC;
    --dark-blue: #007A8C;
    --light-green: #63CE63;
    --green: #01A902;
    --light-yellow: #FCDB58;
    --yellow: #FCD33E;
    --dark-yellow: #F8AC00;
    --light-purple: #E481CB;
    --purple: #B44AC4;
  }

  :global(body){
    background-color: var(--blue);
  }

  main {
    margin: 0 auto;
    max-width: 85vw;
    min-height: 500px;
    background-color: white;
  }
</style>