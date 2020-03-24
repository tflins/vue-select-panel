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
        1/5
      </div>
    </div>

    <div class="vue-select-panle-body">
      <div
        :class="['vue-select-item', {'vue-select-item__active': index === 2 }]"
        v-for="(item, index) in dataList"
        :key="item.key"
      >
        {{ item.text }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VueSelectPanle',

  data() {
    return {}
  },

  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
* {
  box-sizing: border-box;
}

.vue-select-panle {
  position: relative;
  width: 278px;
  padding: 20px 0 12px 0;

  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(230, 232, 235, 0.98);
  border-radius: 4px;
  font-family: PingFangSC-Medium, PingFang SC;

  &-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 0 16px 0 16px;

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

  &-body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 0 16px;

    .vue-select-item {
      height: 28px;
      padding: 4px 11px;
      border-radius: 2px;
      color: rgba(121, 124, 128, 1);
      border: solid 1px rgba(218, 223, 229, 1);
      margin-right: 12px;
      margin-bottom: 8px;
      cursor: pointer;

      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;

      &.vue-select-item__active {
        background: rgba(240, 247, 255, 1);
        border-radius: 2px;
        border: 1px solid rgba(26, 133, 255, 1);
        color: rgba(26, 133, 255, 1);
      }
    }
  }
}
</style>
