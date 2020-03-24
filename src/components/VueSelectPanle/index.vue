<template>
  <div class="vue-select-panle">

    <div class="vue-select-panle-header">
      <div class="vue-select-panle-header__title">
        文章分类
      </div>
      <div class="vue-select-panle-header__question">
        <img src="@/assets/icon/question.png">
      </div>
      <div class="vue-select-panle-header__selectcount">
        5/5
      </div>
    </div>

    <div class="vue-select-panle-body">

    </div>

  </div>
</template>

<script>
export default {
  name: 'VueSelectPanle',

  data() {},

  props: {
    dataList: {}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vue-select-panle {
  box-sizing: border-box;
  position: relative;
  width: 278px;
  height: 181px;
  padding: 20px 16px;

  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(230, 232, 235, 0.98);
  border-radius: 4px;
  font-family: PingFangSC-Medium, PingFang SC;

  &-header {
    display: flex;
    align-items: center;

    &__title,
    &__question {
      float: left;
    }

    &__title {
      margin-right: 5px;
      font-size: 18px;
      font-weight: 500;
      color: rgba(24, 25, 26, 1);
      line-height: 25px;
    }

    &__question {
      width: 18px;
      height: 18px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &__selectcount {
      margin-left: auto;

      color: rgba(121, 124, 128, 1);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
    }
  }
}
</style>
