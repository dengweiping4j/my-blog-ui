<template>
  <div class="main">
    <div class="search">
      <el-input v-model="searchValue" class="search-input" placeholder="输入检索内容"/>
      <el-button type="primary" @click="search">查 询</el-button>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {requestPost} from "../api/request";
import {useRouter} from "vue-router";
import {ElMessage} from "element-plus";

export default {
  methods: {
    search() {
      const queryBody = {
        title: this.searchValue
      }
      requestPost('api/blog/query', queryBody).then((res) => {
        if (res.code === 'SUCCEED') {
          this.router.push("/");
        } else {
          ElMessage.error(res.message);
        }
      });
    }
  },
  setup() {
    const searchValue = ref(null);
    const router = useRouter();
    return {
      searchValue,
      router
    };
  },
};
</script>

<style>
.main {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/home.png);
  background-size: 100%;
}

.search {
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 650px;
  margin: -150px 0 0 -325px;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
}

.search-input .el-input__inner {
  border-radius: 5px 0px 0px 5px !important;
}

.search button {
  padding: 0px 30px;
  border-radius: 0px;
}

.login-btn button {
  width: 100%;
  height: 40px;
  margin: 40px 0px 0px 0px;
}

.login-action button {
  min-height: 20px;
  padding: 0px 10px;
  color: #868686;
}

</style>
