# 商品种类筛选

```
    npm i @zhangyun7031/super-filter
```
vue3+ts+vite开发，适用于商品种类筛选。

### 使用
```
    <script>
        import SuperFilter from '@zhangyun7031/super-filter';
        import '@zhangyun7031/super-filter/lib/index.css';
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
### 属性

| 属性      | 类型 | 描述|
| ----------- | ----------- |----------- |
| data      | Array       |过滤数据列表|
| defaultExpand   | Number        |默认展示的行数|