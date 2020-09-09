<template>
 <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
       
        cols="12"
        sm="12"
      >
        <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
      </v-col>
    </v-row>
  </v-container>

 
</template>

<script>
export default {
  data() {
    return {
       desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          }
       ]
    };
  },
  mounted() {
    console.log(this.$vuetify.breakpoint);
  },
  computed: {
    // imageHeight() {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case "xs":
    //       return "220px";
    //     case "sm":
    //       return "400px";
    //     case "md":
    //       return "500px";
    //     case "lg":
    //       return "600px";
    //     case "xl":
    //       return "800px";
    //   }
    // },
  },
};
</script>