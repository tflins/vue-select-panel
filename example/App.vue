<template>
  <div id="app">
    <vue-select-panel
      v-model="checkedList"
      :data-list="dataList"
      title="文章分类"
      question-text="投稿的文章会按照选择的分类，在文章分类列表中展示。"
    ></vue-select-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        { key: 'tNWMj', text: '前端' },
        { key: 'JTWrq', text: '后端' },
        { key: 'zzIoW', text: '算法' },
        { key: 'rLDPh', text: '哲学' },
        { key: 'T25A2', text: '操作系统' },
        { key: 'ZxpEy', text: '计算机组成原理' },
        { key: 'VPf3B', text: '艺术' },
        { key: 'MYBx6', text: '美学' },
        { key: 'hwGeo', text: '图像处理' },
        { key: 'cKeqe', text: '电影', disable: true },
        { key: 'fRmB9', text: '法学' },
        { key: 'Hfvwg', text: '数控' },
        { key: 'SJn0J', text: '电信' }
      ],
      checkedList: [
        { key: 'zzIoW', text: '算法' },
        { key: 'T25A2', text: '操作系统' }
      ]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
