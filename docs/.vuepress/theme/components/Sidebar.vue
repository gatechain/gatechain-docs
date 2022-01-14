<template>
  <aside class="sidebar">
    <!-- <div class="sidebar-head">
      <img src="@assets/img/bridge.png" alt="">
    </div> -->
    <NavLinks />

    <slot name="top" />

    <SidebarLinks
      :depth="0"
      :items="items"
    />
    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items']
}
</script>

<style lang="stylus">
.sidebar
  @media (max-width: $MQMobile)
    // background: #fff
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .sidebar-head
    display flex
    flex-flow column
    padding-left: 2rem
    @media (max-width: $MQMobile)
      padding-left: 1.2rem


    img
      width 100px
      margin-top 20px
    p
      padding 0
      margin 6px 0
      font-size 18px
      font-weight 600
      color #333333

  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0 1.5rem 0.6rem
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
    .sidebar-heading
      font-weight: normal

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
