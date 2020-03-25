<template>
  <div id="app">
    <vue-select-panle :data-list="dataList" v-model="checkedList"></vue-select-panle>
  </div>
</template>

<script>
import VueSelectPanle from '@/components/VueSelectPanle'

export default {
  data() {
    return {
      dataList: [
        { key: 'fe', text: '前端' },
        { key: 'be', text: '后端' },
        { key: 'alg', text: '算法' },
        { key: 'philosophy', text: '哲学' },
        { key: 'os', text: '操作系统' },
        { key: 'computer-organization', text: '计算机组成原理' },
        { key: 'dqd', text: '算法' },
        { key: 'dsa', text: '哲学' },
        { key: 'fasfa', text: '操作系统' },
        { key: 'casc', text: '前端' },
        { key: 'cdcdd', text: '后端' },
        { key: 'dsada', text: '算法' },
        { key: 'dsads', text: '算法' }
      ],
      checkedList: []
    }
  },

  components: {
    VueSelectPanle
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
