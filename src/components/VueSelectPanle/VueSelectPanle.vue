<template>
  <div class="vue-select-panle">

    <div class="vue-select-panle-header">
      <div class="vue-select-panle-header__title">
        {{ title }}
      </div>
      <div class="vue-select-panle-header__question">
        <img src="@/assets/icon/question.png">
      </div>
      <div class="vue-select-panle-header__selectcount">
        {{ curCheckedLength }}/{{ maxCheckedLength }}
      </div>
    </div>

    <div class="vue-select-panle-body">
      <div
        :class="['vue-select-item', {'vue-select-item__active': item.active }]"
        v-for="(item, index) in dataList"
        :key="item.key"
        @click="onClickItem(item, index)"
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
    return {
      curValue: this.value
    }
  },

  props: {
    value: Array,
    title: {
      type: String,
      default: '标题'
    },
    dataList: {
      type: Array,
      default: () => []
    },
    maxCheckedLength: {
      type: Number,
      default: 5
    }
  },

  computed: {
    curCheckedLength() {
      return this.curValue.length
    }
  },

  watch: {
    curValue(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.curValue = val
    }
  },

  methods: {
    // 点击一项
    onClickItem(item, index) {
      if (!this.checkCanActice(item)) return
      if (!item.active) {
        this.pitchOn(item)
      } else {
        this.cancelSelected(item)
      }
      this.$emit('on-click-item', item, index)
    },

    // 选中
    pitchOn(item) {
      this.$set(item, 'active', true)
      this.curValue.push(item)
      this.curValue = [...new Set(this.curValue)]
    },

    // 取消选中
    cancelSelected(item) {
      let { curValue } = this
      this.$set(item, 'active', false)
      curValue.splice(
        curValue.findIndex(v => v.key === item.key),
        1
      )
    },

    // 验证选项是否能激活
    checkCanActice(item) {
      if (item.disable) return false
      if (this.curCheckedLength >= this.maxCheckedLength && !item.active) return false
      return true
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
