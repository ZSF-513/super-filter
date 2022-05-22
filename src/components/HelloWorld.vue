<script setup lang="ts">
import SuperFilter from '../../packages/SuperFilter'
import { reactive, ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const state = reactive({
  selectValue: true,
  filterData: [
    {
      name: '注销服务',
      key: 'remove',
      icon: 'https://cdn.shupian.cn/sp-pt/wap/images/41saojbxjky0000.png',
      children: [
        {
          name: '公司注销',
          key: 'rgszx',
        },
        {
          name: '简易注销',
          key: 'jyzx',
        },
        {
          name: '注销附属',
          key: 'zxfs',
        },
        {
          name: '疑难注销',
          key: 'ynzx',
        },
      ],
    },
    {
      name: '工商变更',
      key: 'gsbg',
      icon: 'https://cdn.shupian.cn/sp-pt/wap/images/2hccfbrilya0000.png',
      children: [
        {
          name: '个体变更',
          key: 'gtbg',
        },
        {
          name: '个体变更1',
          key: 'gtbg1',
        },
        {
          name: '个体变更2',
          key: 'gtbg2',
        },
        {
          name: '个体变更3',
          key: 'gtbg3',
        },
        {
          name: '个体变更4',
          key: 'gtbg4',
        },
        {
          name: '个体变更5',
          key: 'gtbg5',
        },
        {
          name: '个体变更6',
          key: 'gtbg6',
        },
        {
          name: '个体变更7',
          key: 'gtbg7',
        },
        {
          name: '个体变更8',
          key: 'gtbg8',
        },
        {
          name: '个体变更9',
          key: 'gtbg9',
        },
        {
          name: '个体变更10',
          key: 'gtbg10',
        },
        {
          name: '个体变更12',
          key: 'gtbg12',
        },
        {
          name: '个体变更13',
          key: 'gtbg13',
        },
        {
          name: '个体变更14',
          key: 'gtbg14',
        },
        {
          name: '个体变更15',
          key: 'gtbg15',
        },
        {
          name: '个体变更16',
          key: 'gtbg16',
        },
        {
          name: '个体变更17',
          key: 'gtbg17',
        },
        {
          name: '个体变更18',
          key: 'gtbg18',
        },
      ],
    },
    {
      name: '互联网营销',
      key: 'hlw',
      icon: 'https://cdn.shupian.cn/sp-pt/wap/images/ilqol7lrwcw000.png',
      children: [
        {
          name: '公司注销',
          key: 'rgszx1',
        },
        {
          name: '简易注销',
          key: 'jyzx1',
        },
        {
          name: '注销附属',
          key: 'zxfs1',
        },
        {
          name: '疑难注销',
          key: 'ynzx1',
        },
      ],
    },
    {
      name: 'it软件',
      key: 'it',
      icon: 'https://cdn.shupian.cn/sp-pt/wap/images/3v6yru205ki0000.png',
      children: [
        {
          name: '公司注销',
          key: 'rgszx2',
        },
        {
          name: '简易注销',
          key: 'jyzx2',
        },
        {
          name: '注销附属',
          key: 'zxf3s',
        },
        {
          name: '疑难注销',
          key: 'ynzx3',
        },
      ],
    },
    {
      name: '许可证办理',
      key: 'xkz',
      icon: 'https://cdn.shupian.cn/sp-pt/wap/images/41saojbxjky0000.png',
      children: [
        {
          name: '公司注销',
          key: 'rgszx4',
        },
        {
          name: '简易注销',
          key: 'jyzx4',
        },
        {
          name: '注销附属',
          key: 'zxfs4',
        },
        {
          name: '疑难注销',
          key: 'ynzx4',
        },
      ],
    },
    {
      name: '许可证办理1',
      key: 'xkz1',
      icon: 'https://cdn.shupian.cn/sp-pt/wap/images/41saojbxjky0000.png',
      children: [
        {
          name: '公司注销',
          key: 'rgszx4',
        },
        {
          name: '简易注销',
          key: 'jyzx4',
        },
        {
          name: '注销附属',
          key: 'zxfs4',
        },
        {
          name: '疑难注销',
          key: 'ynzx4',
        },
      ],
    },
    {
      name: '许可证办理2',
      key: 'xkz2',
      icon: 'https://cdn.shupian.cn/sp-pt/wap/images/41saojbxjky0000.png',
      children: [
        {
          name: '公司注销',
          key: 'rgszx4',
        },
        {
          name: '简易注销',
          key: 'jyzx4',
        },
        {
          name: '注销附属',
          key: 'zxfs4',
        },
        {
          name: '疑难注销',
          key: 'ynzx4',
        },
      ],
    },
  ],
})

function handleFilter(params: Record<string, any>) {
  console.log('parmas filters', params);
}
</script>

<template>
  <h1>超级过滤器</h1>
  <SuperFilter :data="state.filterData" :selected="state.selectValue" @onFilter="handleFilter"></SuperFilter>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
