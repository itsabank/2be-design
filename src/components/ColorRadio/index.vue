<template>
  <div>
    <label
      class="flex items-center flex-col space-y-1"
      :class="disabled ? ' cursor-not-allowed opacity-50' : 'cursor-pointer'"
    >
      <input
        type="radio"
        class="hidden"
        :disabled="disabled"
        :name="name"
        @change="onChange"
        :value="value"
        v-model="localValue"
        v-bind="$attrs"
      />
      <div :class="
          (localValue === value
            ? activeClass +
              ' ring-2 ring-offset-2 dark:ring-offset-2 dark:ring-offset-slate-800 border-slate-700 '
            : ' border-slate-400 dark:border-slate-600 dark:ring-slate-700 ')
            + color
        "
        class="w-16 h-16 rounded border border-[#e5e5e5] dark:border-slate-600 transition-all duration-150">
        <!-- <img class="w-full h-full rounded object-contain" :src="Color1" alt="." /> -->
      </div>
      <span
        class="text-slate-500 dark:text-slate-400 text-sm leading-6"
        v-if="label"
      >
        {{ label }}
      </span>
    </label>
  </div>
</template>
<script>
import Color1 from "@/assets/images/color/C-W01.webp";
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "FrameColor",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "checkbox",
    },
    activeClass: {
      type: String,
      default: "ring-black-500 dark:ring-slate-700",
    },
    color: {
      type: String,
      default: "bg-black-500",
    },
    value: {
      type: null,
    },
    modelValue: {
      type: null,
    },
  },
  emits: {
    "update:modelValue": (newValue) => ({
      modelValue: newValue,
    }),
  },

  setup(props, context) {
    const ck = ref(props.checked);

    // on change event
    const onChange = () => {
      ck.value = !ck.value;
    };

    const localValue = computed({
      get: () => props.modelValue,
      set: (newValue) => context.emit("update:modelValue", newValue),
    });

    return { Color1, localValue, ck, onChange };
  },
});
</script>
<style lang=""></style>
