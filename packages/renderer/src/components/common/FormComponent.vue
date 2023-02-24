<script setup lang="ts">
import {reactive, watch} from 'vue';
import {type FormConfigType, FormType, FormSecondLevelType} from '/@/interface/common';

const props = defineProps<{
  formVal: Record<string, any>;
  colunms: FormConfigType[];
}>();

const formState = reactive<{
  formVal: Record<string, any>;
  colunms: FormConfigType[];
}>({
  formVal: props.formVal,
  colunms: props.colunms,
});

watch(
  () => props.formVal,
  val => {
    formState.formVal = val;
  },
  {
    deep: true,
  },
);
</script>

<template>
  <a-form>
    <a-form-item
      v-for="(i, index) in formState.colunms"
      :key="i.prop"
      :label="i.label"
    >
      <template v-if="!i.slot">
        <component
          :is="FormType[i.type]"
          v-model:value="formState.formVal[i.prop]"
        >
          <div v-if="i.type === 'checkbox'">
            <component
              :is="FormSecondLevelType.checkbox"
              v-for="k in i.dicData"
              :key="k.label"
              :value="k.value"
            >
              <span>{{ k.label }}</span>
            </component>
          </div>
          <div v-if="i.type === 'select'">
            <component
              :is="FormSecondLevelType.select"
              v-for="k in i.dicData"
              :key="k.label"
              :value="k.value"
            >
              {{ k.label }}
            </component>
          </div>
          <div v-if="i.type === 'radio'">
            <component
              :is="FormSecondLevelType.radio"
              v-for="k in i.dicData"
              :key="k.label"
              :value="k.value"
            >
              {{ k.label }}
            </component>
          </div>
        </component>
      </template>
      <template v-else>
        <slot
          :name="i.prop"
          :scope="{i, index}"
        />
      </template>
    </a-form-item>
  </a-form>
</template>
