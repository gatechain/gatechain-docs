<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
    <div class="footer"> GateChain © 2022 </div>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom: 2rem
  display: block
  .theme-default-content
    margin: 0
    background: #ffffff
    border-radius: 1rem
    box-shadow: 0px 1px 6px 0px rgba(0,0,0,0.12)
    position: relative
    min-height: 60vh
  .footer
    text-align: center
@media (max-width: $MQMobile)
  .page
    padding-top: 3rem
    .theme-default-content
      padding-top: 0
      background: none
      box-shadow: none
      position: relative
      min-height: 60vh
    .footer
      text-align: center

</style>
