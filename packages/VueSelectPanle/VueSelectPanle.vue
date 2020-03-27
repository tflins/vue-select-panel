<template>
  <div class="vue-select-panle">

    <div class="vue-select-panle-header">
      <div class="vue-select-panle-header__title">{{ title }}</div>
      <div
        class="vue-select-panle-header__question"
        v-if="questionText"
      >
        <popper :options="{placement: 'top', modifiers: { offset: { offset: '0, 4px' } }}">
          <div class="popper">
            {{ questionText }}
          </div>
          <img
            slot="reference"
            src="./assets/icon/question.png"
          >
        </popper>
      </div>
      <div
        class="vue-select-panle-header__selectcount"
        v-if="showScale"
      >
        {{ curCheckedLength }}/{{ maxCheckedLength }}
      </div>
    </div>

    <div
      class="vue-select-panle-body"
      :style="{maxHeight: `${maxHeight}px`}"
      v-if="refresh"
    >
      <div
        :class="['vue-select-item', {'vue-select-item__active': isChecked(item) }, { 'vue-select-item__disable': item.disable }]"
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
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/vue-popper.css'

export default {
  name: 'VueSelectPanle',

  data() {
    return {
      curValue: this.value,
      refresh: true
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
    },
    questionText: String,
    showScale: {
      type: Boolean,
      default: true
    },
    maxHeight: Number
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
      // TODO: 暂时先这样写，不能每次重渲染
      this.refresh = false
      this.refresh = true
    },
    curCheckedLength(len) {
      if (len === this.value.length) this.$emit('checked-full', this.curValue)
    }
  },

  components: {
    Popper
  },

  methods: {
    // 点击一项
    onClickItem(item, index) {
      if (!this.checkCanActice(item)) return
      if (!this.isChecked(item)) {
        this.pitchOn(item)
      } else {
        this.cancelSelected(item)
      }
      this.$emit('on-click-item', item, index)
    },

    // 选中
    pitchOn(item) {
      this.curValue.push(item)
      this.curValue = [...new Set(this.curValue)]
    },

    // 取消选中
    cancelSelected(item) {
      let { curValue } = this
      curValue.splice(
        curValue.findIndex(v => v.key === item.key),
        1
      )
    },

    // 验证选项是否能激活
    checkCanActice(item) {
      if (item.disable) return false
      if (
        this.curCheckedLength >= this.maxCheckedLength &&
        !this.isChecked(item)
      )
        return false
      return true
    },

    // 判断是否为选中项
    isChecked(item) {
      return this.value.findIndex(v => v.key === item.key) > -1
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

      /deep/ {
        .popper {
          width: 226px;
          padding: 25px 12px 16px 12px;

          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          text-align: left;
          font-weight: 400;
          color: rgba(121, 124, 128, 1);
          line-height: 20px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 4px 12px 0px rgba(0, 27, 58, 0.08);
        }
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
    overflow: auto;

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

      &:not(.vue-select-item__disable):hover {
        border: 1px solid rgba(153, 201, 255, 1);
        color: rgba(25, 133, 255, 1);
      }

      &:not(.vue-select-item__disable):active {
        border: 1px solid rgba(77, 128, 187, 1);
        color: rgba(77, 128, 187, 1);
      }

      &.vue-select-item__active {
        background: rgba(240, 247, 255, 1);
        border-radius: 2px;
        border: 1px solid rgba(26, 133, 255, 1);
        color: rgba(26, 133, 255, 1);
      }

      &.vue-select-item__disable {
        cursor: no-drop;
        opacity: 0.5;
      }
    }
  }
}
</style>
