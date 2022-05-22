<template>
  <div class="filter-container">
    <div class="left"></div>
    <div class="right"></div>
    <div class="menus-content">
      <div v-for="item of showFilterData" :key="item.key" class="rows">
        <div class="sup-menu">
          <div class="sup-menu-item">
            <div class="icon">
              <img :src="item.icon" alt="" />
            </div>
            <div class="text">{{ item.name }}</div>
          </div>
        </div>
        <div class="child-menu">
          <div class="all-child-menu" :class="[isActive(item.key, 'all')]" @click="handleActive(item.key, 'all')">
            全部
          </div>
          <div class="other-child-menu">
            <div v-for="(child, childIdx) of item.children" :key="childIdx" class="child-menu-item"
              :class="[isActive(item.key, child.key)]" @click="handleActive(item.key, child.key)">
              {{ child.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="show-more" @click="handleShowMore">
        <span>{{ isShowMore ? "收起" : "展示更多" }}</span>
        <i class="icon" :class="[isShowMore ? 'icon__close' : 'icon__open']"></i>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "SuperFilter",
};
</script>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { SELECT_CODE } from "./interface";

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  selected: {
    type: Object,
    default: () => { },
  },
  defaultExpand: {
    type: Number,
    default: 5
  }
});

const emits = defineEmits(["onFilter"]);

// 默认参数定义
const actives = ref([])
const showFilterData = ref([])

function isActive(parentValue: string | number, childValue: string | number): string {
  for (let item of actives.value) {
    if (item.key === parentValue && item.value === childValue) {
      return "active";
    }
  }
}
function handleActive(
  parentValue: string | number,
  childValue: string | number
): void {
  for (let item of actives.value) {
    if (item.key === parentValue) {
      item.value = childValue;
    }
  }
  emits("onFilter", actives);
}

const isShowMore = ref(false);
watch(
  () => isShowMore.value,
  (val) => {
    handleData();
  }
);
function handleShowMore(): void {
  isShowMore.value = !isShowMore.value;
}

watch(
  () => props.data,
  (val) => {
    val.length && handleData();
  },
  { immediate: true, deep: true }
);

// 处理传入数据
function handleData(): void {
  if (!isShowMore.value) {
    showFilterData.value = props.data.slice(0, props.defaultExpand);
  } else {
    showFilterData.value = props.data.slice(0);
  }
  // 创建默认值
  actives.value = showFilterData.value.map((item) => {
    return {
      key: item.key,
      value: "all",
    };
  });
}

// 选中处理
watch(
  () => props.selected,
  (val) => {
    if (JSON.stringify(val) !== "{}") {
      const { parent, child } = val
      handleSelected({ parent, child });
    }
  },
  {
    immediate: true,
  }
);

function handleSelected(params: SELECT_CODE): void {
  const { parent, child } = params;
  isActive(parent, child);
  handleActive(parent, child);
}
</script>

<style lang="scss" scoped>
@import './assets/index.scss';
</style>