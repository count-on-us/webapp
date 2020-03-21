<template>
  <section class="hero is-dark is-fullheight is-bold">
    <div class="hero-head">
      <nav-bar />
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container">
        <div class="content">
          <h1 class="title">
            Como funciona?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ratione explicabo nobis, alias quia voluptate nihil eius deleniti! Voluptas assumenda molestias veritatis odit explicabo maiores modi consectetur nostrum recusandae alias?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quasi eaque at, blanditiis deserunt iste earum, nesciunt distinctio eos commodi necessitatibus veritatis. Voluptatem culpa nesciunt officia omnis veniam nam illo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aspernatur excepturi totam necessitatibus hic quo magnam aliquam sunt culpa id tempore eius similique quae voluptate, placeat nihil, eligendi assumenda tenetur!
          </p>
        </div>
        <h2 class="subtitle has-text-centered">
          Junte-se a nós!
        </h2>
        <join-buttons />
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar'
import JoinButtons from '@/components/JoinButtons'

export default {
  components: {
    NavBar,
    JoinButtons
  }
}
</script>
