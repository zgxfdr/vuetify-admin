<template>
  <v-navigation-drawer app clipped v-model="drawer">
    <v-list dense>
      <template v-for="item in $router.options.routes">
        <template v-for="(items,index) in item.children">
          <v-list-item link  :key="index">
            <v-list-item-action>
              <v-icon>{{items.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{items.meta.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import Bus from "../eventBus.js";
export default {
  data() {
    return {
      drawer: true,
    };
  },

  mounted() {
    let that = this;
    Bus.$on("changedrawer", (data) => {
      console.log(data);
      that.drawer = data;
    });

    console.log(this.$router.options.routes);
  },
  methods: {},
};
</script>