# vue-select-panle

## 这是一个 vue 的多选面板组件

![截屏2020-03-2602.09.11.png](http://ww1.sinaimg.cn/large/006iQgpIgy1gd6pzu9bs1j30gu0dg0u0.jpg)

## 安装

```shell
npm i vue-select-panle -S
```

## 使用

### VueJS single file (ECMAScript 2015)

#### 在入口文件中全局安装

可以在入口文件 main.js 中全局引入依赖，也可以当做单文件组件使用

```javascript
import VueSelectPanle from 'vue-select-panle'
import 'vue-select-panle/lib/vue-select-panle.css'

Vue.use(VueSelectPanle)
```

#### 在组件中使用

```javascript
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
  name: 'App',
  data() {
    return {
      dataList: [
        { key: 'front-end', text: '前端' },
        { key: 'back-end', text: '后端' },
        { key: 'algorithm', text: '算法' },
        { key: 'philosophy', text: '哲学' },
        { key: 'operating-system', text: '操作系统' },
        { key: 'computer-organization', text: '计算机组成原理' }
      ],
      checkedList: []
    }
  }
}
</script>
```

### Browser (ES5)

```javascript
<link rel="stylesheet" href="vue-select-panle/lib/vue-select-panle.css">
<script type="text/javascript" src="vue-select-panle.umd.min.js"></script>

<div id="app">
  <vue-select-panle
    v-model="checkedList"
    :data-list="dataList"
    title="文章分类"
    questionText="投稿的文章会按照选择的分类，在文章分类列表中展示。"
  ></vue-select-panle>
</div>

<script type="text/javascript">
new Vue({
  el: '#app',
  components: {
    VueSelectPanle
  }
})
```

## Props

| 属性名称 | 说明 | 类型 | 可选值 | 默认 |
| ------ | ------ | --- | ---- | --- |
| value | 已选中的值，可使用 v-model 进行双向绑定 | Array |
| title | 多选面板的标题 | String | | '标题' |
| dataList | 传入的可选择项数组, 每一项是一个对象 | Array |
| maxCheckedLength | 最大可以选中的数量 | Number | | 5 |
| questionText | 疑问弹出层的文本，当该项为空时，自动隐藏疑问图标 | String |
| showScale | 是否显示已选中的值和最大可选中的值的比例 | Boolean | true, false | true |

### dataList props

| 属性名称 | 说明 | 类型 | 必须包含 |
| ------ | ------ | --- | ---- |
| key | 该项的唯一标识，不可重复 | | 是 |
| text | 该项的文本描述, 展示文本 | | 是 |
| disable | 该项是否不可选 | Boolean |

## Events

| 事件名称 | 说明 | 返回参数 |
| ------ | ---- | --- |
| on-click-item | 点击每一个选项时触发 | item, index |
| on-checked-full | 当选中值达最大可选中值时触发 | value : 当前已选中的值数组 |

## License

MIT 一起来扣细节吧~
