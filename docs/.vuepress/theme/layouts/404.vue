<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink :to="isZh ? '/zh/home/' : '/home/'">
        {{ isZh ? '返回首页' : 'Take me home.'}}
      </RouterLink>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    isZh() {
      return this.$route.path.includes('/zh/')
    }
  },
  methods: {
    getMsg() {
      const msgs = this.isZh ? [
        `There's nothing here.`,
        `That's a Four-Oh-Four.`,
        `Looks like we've got some broken links.`
      ] : [
        `There's nothing here.`,
        `That's a Four-Oh-Four.`,
        `Looks like we've got some broken links.`
      ]
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
