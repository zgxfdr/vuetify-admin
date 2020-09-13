<template>
  <div>
    <div>{{$store.getters.count}}</div>
    <button @click="submit">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    submit() {
      this.$store.commit("increment");
    },
  },
};
</script>