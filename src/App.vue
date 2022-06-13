<template>
  <div class="bg-zinc-900">
    <MenuHeader/>
    <MainBody/>
  </div>
</template>

<script>
import MenuHeader from './components/MenuHeader.vue'
import MainBody from './components/MainBody.vue'

export default {
  name: 'App',
  components: {
    MenuHeader, 
    MainBody
  }
}
</script>

