<template>
  <div class="main">
    <v-header/>
    <div>
      个人资料
    </div>
    <div>
      <div>
        <router-view v-slot="{ Component }">
          <component :is="Component"/>
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
import {computed} from "vue";
import {useStore} from "vuex";
import vHeader from "../components/Header.vue";

export default {
  components: {
    vHeader
  },
  setup() {
    const store = useStore();
    const collapse = computed(() => store.state.collapse);
    return {
      collapse,
    };
  },
};
</script>

<style>
.main {
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/bg.png);
  background-size: 100%;
}

</style>
