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
          <div
            class="all-child-menu"
            :class="[isActive(item.key, 'all')]"
            @click="handleActive(item.key, 'all')"
          >
            <span>全部</span>
          </div>
          <div class="other-child-menu">
            <span
              v-for="(child, childIdx) of item.children"
              :key="childIdx"
              class="child-menu-item"
              :class="[isActive(item.key, child.key)]"
              @click="handleActive(item.key, child.key)"
            >
              {{ child.name }}
            </span>
          </div>
        </div>
      </div>
      <div class="show-more" @click="handleShowMore">
        <span>{{ isShowMore ? "收起" : "展示更多" }}</span>
        <svg
          t="1654911256281"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1229"
          width="200"
          height="200"
        >
          <path
            d="M533.333333 776.533333L341.333333 584.533333l29.866667-29.866666 162.133333 162.133333 162.133334-162.133333 29.866666 29.866666-192 192z m0-503.466666l-162.133333 162.133333-29.866667-29.866667L533.333333 213.333333 725.333333 405.333333l-29.866666 29.866667-162.133334-162.133333z"
            fill="#cdcdcd"
            p-id="1230"
          ></path>
        </svg>
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
  selectAll: {
    type: Boolean,
    default: true,
  },
  defaultExpand: {
    type: Number,
    default: 5,
  },
});

const emits = defineEmits(["onFilter"]);

// 默认参数定义
const actives = ref<Record<string, any>[]>([]);
const showFilterData = ref<unknown[]>([]);

// 激活状态
function isActive(
  parentValue: string | number,
  childValue: string | number
): string | undefined {
  if (!actives.value.length) return "";
  for (let item of actives.value) {
    if (item.key === parentValue && item.value === childValue) {
      return "active";
    }
  }
}
// 处理选中
function handleActive(
  parentValue: string | number,
  childValue: string | number
): void {
  for (let item of actives.value) {
    if (item.key === parentValue) {
      if (item.value === childValue) {
        item.value = "";
      } else {
        item.value = childValue;
      }
    }
  }
  const filterData = actives.value.filter((item) => item.value !== "");
  emits("onFilter", filterData);
}

const isShowMore = ref(false);
watch(
  () => isShowMore.value,
  (val) => {
    handleData({ isSetDefValue: false });
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
function handleData(params = { isSetDefValue: true }): void {
  if (!isShowMore.value) {
    showFilterData.value = props.data.slice(0, props.defaultExpand);
  } else {
    showFilterData.value = props.data.slice(0);
  }

  const defaultSelect = (defValue = false) => {
    const data = showFilterData.value.map((item) => {
      return {
        key: item.key,
        value: defValue ? openSelect(item) || "all" : "",
      };
    });
    return data;
  };
  const openSelect = (params) => {
    if (!actives.value.length) return "all";
    for (let active of actives.value) {
      if (active.key === params.key) {
        return active.value;
      }
    }
  };

  // 创建默认值
  if (props.selectAll) {
    //默认值为all
    console.log("actives======>", actives.value);
    actives.value = defaultSelect(true);
  } else if (params.isSetDefValue) {
    // 默认值为空
    actives.value = defaultSelect();
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/index.scss";
</style>
