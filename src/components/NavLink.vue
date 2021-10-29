<template>
  <a
    :href="normalizedlink"
    class="external"
    :target="'_blank'"
    :rel="'noopener noreferrer'"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      required: true,
      type: String,
    },
  },

  computed: {
    normalizedlink () {
      return this.link
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.normalizedlink)
      }
      return this.normalizedlink === '/'
    },
  },
}
</script>

<style scoped>
.nav-link {
  color: #222;
}

.nav-link:hover, .nav-link.router-link-active {
    color: #7a01ff;
}
</style>
