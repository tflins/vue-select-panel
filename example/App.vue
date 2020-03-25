<template>
  <div id="app">
    <vue-select-panle
      v-model="checkedList"
      :data-list="dataList"
      title="文章分类"
      questionText="投稿的文章会按照选择的分类，在文章分类列表中展示。"
    ></vue-select-panle>
  </div>
</template>

<script>
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
        { key: 'casc', text: '前端', disable: true },
        { key: 'cdcdd', text: '后端' },
        { key: 'dsada', text: '算法' },
        { key: 'dsads', text: '算法' }
      ],
      checkedList: []
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
