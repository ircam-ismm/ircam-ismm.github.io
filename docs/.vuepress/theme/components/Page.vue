<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />

    <section class="credits">
      {Sound Music Movement} Interaction Team - STMS-LAB
      <a href="https://www.ircam.fr/" class="ircam"></a>
      <a href="http://www.cnrs.fr/" class="cnrs"></a>
      <a href="http://www.sorbonne-universite.fr/" class="su"></a>
      <a href="https://www.culture.gouv.fr/" class="culture"></a>
      </div>
    </section>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

function updateFooter() {
  const windowHeight = window.innerHeight;
  const headerHeight = document.querySelector('.navbar').getBoundingClientRect().height;
  const pageHeight = document.querySelector('.page').getBoundingClientRect().height;
  const $credits = document.querySelector('.credits');

  if (windowHeight - headerHeight > pageHeight) {
    $credits.style.position = 'fixed';
  } else {
    $credits.style.position = 'absolute';
  }
}

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
  mounted() {
    updateFooter();
  },
  updated() {
    updateFooter();
  },
}
</script>

<style lang="stylus">

.page
  padding-bottom 4rem
  display block
  position relative

.credits
  position fixed
  bottom 0
  right 0
  height 4rem
  width inherit
  line-height 4rem
  padding 0 1rem
  font-size: 0.8rem

.credits a
  height 30px
  width 60px
  display inline-block
  vertical-align middle
  background-color none
  background-repeat no-repeat
  background-position 50% 50%
  background-size contain

.credits a:first-child
  margin-left 50px

.credits a.ircam
  background-image url(../../public/ircam-black.jpg)

.credits a.cnrs
  background-image url(../../public/cnrs-black.png)

.credits a.su
  background-image url(../../public/su-black.png)

.credits a.culture
  background-image url(../../public/culture-black.jpg)
</style>
