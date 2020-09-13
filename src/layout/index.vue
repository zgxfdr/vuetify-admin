 <style lang="less">
.app-layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  .app-sidenav {
    display: flex;
  }
  .app-layout {
    width: 100%;
    display: flex;
    flex: auto;
    flex-direction: column;
    background-color: #f1f1f1;
  }
}
</style>
 <template>
  <v-app id="inspire">
    <div class="app-sidenav">
      <sider-bar />
    </div>
    <div class="app-layout">
      <div class="app-layout-header">
        <nav-bar />
      </div>
      <div class="app-layout-main">
        <app-main />
      </div>
    </div>
    <!-- <Footer/> -->
  </v-app>
</template>

<script>
import { AppMain, NavBar, SiderBar } from "./components";
export default {
  props: {
    source: String,
  },
  components: {
    AppMain,
    SiderBar,
    NavBar,
  },
  data: () => ({}),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

 