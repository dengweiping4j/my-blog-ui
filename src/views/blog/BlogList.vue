<template>
  <div class="main">
  </div>
</template>

<script>
import {ref} from "vue";
import {requestPost} from '/src/api/request'

export default {
  methods: {
    search() {
      const queryBody = {
        title: this.searchValue
      }
      requestPost('api/blog/query', queryBody).then((res) => {
        if (res.data) {
          console.log(res);
        }
      });
    }
  },
  setup() {
    const searchValue = ref(null);
    return {
      searchValue,
    };
  },
};
</script>

<style>
.main {
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
