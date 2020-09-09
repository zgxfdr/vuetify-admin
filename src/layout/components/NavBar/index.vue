<template>
  <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="changeDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
</template>
<script>
import Bus from '../eventBus.js'
export default {
    data(){
        return{
            drawer:null
        }
    },
    methods:{
        changeDrawer(){
            Bus.$emit('changedrawer',this.drawer= !this.drawer)
        }
    }
}
</script>