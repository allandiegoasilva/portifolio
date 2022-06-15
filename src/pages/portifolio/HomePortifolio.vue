<template>
  <div class="bg-zinc-900">
    <MenuHeader/>
    <MainBody/>
  </div>
</template>

<script>
import MenuHeader from '../../components/Portifolio/MenuHeader.vue'
import MainBody from '../../components/Portifolio/MainBody.vue'

export default {
  name: 'HomePortifolio',
  components: {
    MenuHeader, 
    MainBody
  }
}
</script>

