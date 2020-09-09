<template>
  <div class="breadcrumb-container">
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <template v-for="(item,index) in levelList">
          <template v-if="index !== levelList.length-1">
            <el-breadcrumb-item :key="item.path" :to="item.path">{{ item.meta.title }}</el-breadcrumb-item>
          </template>
          <template v-else>
            <el-breadcrumb-item :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
          </template>
        </template>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      levelList: null
    };
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    // 获取当前路由信息
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
      const first = matched[0];

      if (!this.isDashboard(first)) {
        matched = [{ path: "/dashboard", meta: { title: "首页" } }].concat(
          matched
        );
      }

      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    // 是否首页
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
      );
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  }
};
</script>

 <style lang="less">
.breadcrumb-container {
  flex: 1;
  margin-left: 10px;
  .el-breadcrumb__inner,
  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    font-weight: normal;
    color: #fff;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #cdd3dc;
  }
}
</style>