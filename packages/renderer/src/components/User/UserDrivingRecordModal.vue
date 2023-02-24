<script setup lang="ts">
import {reactive, ref} from 'vue';
import {type CustomerItem, drivingRecordType} from '/@/interface/customer';
import {} from 'lodash-es';

const modalVisible = ref(false);

const state = reactive<{
  descriptionsVal: CustomerItem['drivingRecord'];
}>({
  descriptionsVal: [],
});

const handleOk = () => {
  modalVisible.value = false;
};

const show = (val: CustomerItem['drivingRecord']) => {
  state.descriptionsVal = val;
  modalVisible.value = true;
};

defineExpose({
  show,
});
</script>

<template>
  <div>
    <a-modal
      v-model:visible="modalVisible"
      title="驾驶记录详情"
      @ok="handleOk"
    >
      <a-descriptions
        v-for="v in state.descriptionsVal"
        :key="v.carNumber"
        :title="`${v.startTime}驾驶记录`"
      >
        <a-descriptions-item
          v-for="k in Object.keys(v)"
          :key="k"
          :label="k"
        >
          {{ v[k as keyof drivingRecordType] }}
        </a-descriptions-item>
      </a-descriptions>
    </a-modal>
  </div>
</template>
