import { defineComponent, ref, watch, openBlock, createElementBlock, createElementVNode, Fragment, renderList, toDisplayString, normalizeClass, pushScopeId, popScopeId } from 'vue';

const _withScopeId = n => (pushScopeId("data-v-46c39577"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "filter-container" };
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ createElementVNode("div", { class: "left" }, null, -1 /* HOISTED */));
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ createElementVNode("div", { class: "right" }, null, -1 /* HOISTED */));
const _hoisted_4 = { class: "menus-content" };
const _hoisted_5 = { class: "sup-menu" };
const _hoisted_6 = { class: "sup-menu-item" };
const _hoisted_7 = { class: "icon" };
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "text" };
const _hoisted_10 = { class: "child-menu" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { class: "other-child-menu" };
const _hoisted_13 = ["onClick"];
const __default__ = {
    name: "SuperFilter",
};
var script = /*#__PURE__*/ defineComponent({
    ...__default__,
    props: {
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
    },
    emits: ["onFilter"],
    setup(__props, { emit: emits }) {
        const props = __props;
        // 默认参数定义
        const actives = ref([]);
        const showFilterData = ref([]);
        function isActive(parentValue, childValue) {
            for (let item of actives.value) {
                if (item.key === parentValue && item.value === childValue) {
                    return "active";
                }
            }
        }
        function handleActive(parentValue, childValue) {
            for (let item of actives.value) {
                if (item.key === parentValue) {
                    item.value = childValue;
                }
            }
            emits("onFilter", actives);
        }
        const isShowMore = ref(false);
        watch(() => isShowMore.value, (val) => {
            handleData();
        });
        function handleShowMore() {
            isShowMore.value = !isShowMore.value;
        }
        watch(() => props.data, (val) => {
            val.length && handleData();
        }, { immediate: true, deep: true });
        // 处理传入数据
        function handleData() {
            if (!isShowMore.value) {
                showFilterData.value = props.data.slice(0, props.defaultExpand);
            }
            else {
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
        watch(() => props.selected, (val) => {
            if (JSON.stringify(val) !== "{}") {
                const { parent, child } = val;
                handleSelected({ parent, child });
            }
        }, {
            immediate: true,
        });
        function handleSelected(params) {
            const { parent, child } = params;
            isActive(parent, child);
            handleActive(parent, child);
        }
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1, [
                _hoisted_2,
                _hoisted_3,
                createElementVNode("div", _hoisted_4, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(showFilterData.value, (item) => {
                        return (openBlock(), createElementBlock("div", {
                            key: item.key,
                            class: "rows"
                        }, [
                            createElementVNode("div", _hoisted_5, [
                                createElementVNode("div", _hoisted_6, [
                                    createElementVNode("div", _hoisted_7, [
                                        createElementVNode("img", {
                                            src: item.icon,
                                            alt: ""
                                        }, null, 8 /* PROPS */, _hoisted_8)
                                    ]),
                                    createElementVNode("div", _hoisted_9, toDisplayString(item.name), 1 /* TEXT */)
                                ])
                            ]),
                            createElementVNode("div", _hoisted_10, [
                                createElementVNode("div", {
                                    class: normalizeClass(["all-child-menu", [isActive(item.key, 'all')]]),
                                    onClick: ($event) => (handleActive(item.key, 'all'))
                                }, " 全部 ", 10 /* CLASS, PROPS */, _hoisted_11),
                                createElementVNode("div", _hoisted_12, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (child, childIdx) => {
                                        return (openBlock(), createElementBlock("div", {
                                            key: childIdx,
                                            class: normalizeClass(["child-menu-item", [isActive(item.key, child.key)]]),
                                            onClick: ($event) => (handleActive(item.key, child.key))
                                        }, toDisplayString(child.name), 11 /* TEXT, CLASS, PROPS */, _hoisted_13));
                                    }), 128 /* KEYED_FRAGMENT */))
                                ])
                            ])
                        ]));
                    }), 128 /* KEYED_FRAGMENT */)),
                    createElementVNode("div", {
                        class: "show-more",
                        onClick: handleShowMore
                    }, [
                        createElementVNode("span", null, toDisplayString(isShowMore.value ? "收起" : "展示更多"), 1 /* TEXT */),
                        createElementVNode("i", {
                            class: normalizeClass(["icon", [isShowMore.value ? 'icon__close' : 'icon__open']])
                        }, null, 2 /* CLASS */)
                    ])
                ])
            ]));
        };
    }
});

script.__scopeId = "data-v-46c39577";
script.__file = "packages/SuperFilter/src/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};

export { script as default };
