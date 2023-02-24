<script setup lang="ts">
import {reactive} from 'vue';
import {getFormColumns} from './config';

type FormVal = {
  selectQuery: Array<'name' | 'phone' | 'address'>;
  name: string;
  phone: string;
  address: string;
};

const formState = reactive<{
  formVal: FormVal;
  layout: string;
}>({
  formVal: {
    selectQuery: [],
    name: '',
    phone: '',
    address: '',
  },
  layout: 'inline',
});
</script>

<template>
  <div class="u-user-form">
    <a-form
      :model="formState.formVal"
      :layout="formState.layout"
    >
      <a-form-item
        v-for="i in getFormColumns(formState.formVal.selectQuery)"
        v-show="i.isShow"
        :key="i.prop"
        :label="i.label"
      >
        <component
          :is="`a-${i.type}`"
          v-model:value="formState.formVal[i.prop as keyof FormVal]"
        >
          <div v-if="Object.keys(i).find(v => v === 'options')">
            <component
              :is="`a-${k.type}`"
              v-for="k in i.options"
              :key="k.value"
              :value="k.value"
            >
              {{ k.label }}
            </component>
          </div>
        </component>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
        >
          查询
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
