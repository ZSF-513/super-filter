# 商品种类筛选

```
    npm i @zhangyun7031/super-filter
```
vue3+ts+vite开发，适用于商品种类筛选。

### 使用
```
    <script lang="ts" setup>
        import SuperFilter from '@zhangyun7031/super-filter';
        import '@zhangyun7031/super-filter/lib/index.css';

        const state = reactive({
           filterData: [
            // 一级菜单
            { 
                name: '一级菜单',
                key: 'level1',
                icon: '',
                // 子菜单
                children: [ 
                    {
                        name: '子菜单',
                        key: 'level1-child-1',
                    },
                ],
            },
           ] 
        })
    </script>

    <template>
        <h1>测试商品过滤器</h1>
        <SuperFilter 
        :data="state.filterData" 
        :selected="state.selectValue" 
        @onFilter="handleFilter">
        </SuperFilter>
    </template>
```

### github
https://github.com/ZSF-513/super-filter/tree/master
### 属性

| 属性      | 类型 | 描述|
| ----------- | ----------- |----------- |
| data      | Array       |过滤数据列表|
| defaultExpand   | Number        |默认展示的行数|
| selectAll   | Boolean        |默认选中全部：true ; 默认不选中任何值:false|