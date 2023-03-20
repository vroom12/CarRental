<script setup lang="ts">
import {reactive, ref} from 'vue';
import {type leaseRecordType} from '/@/interface/customer';
import {} from 'lodash-es';

const modalVisible = ref(false);

const state = reactive<{
  descriptionsVal: leaseRecordType[];
}>({
  descriptionsVal: [],
});

const handleOk = () => {
  modalVisible.value = false;
};

const show = (val: leaseRecordType[]) => {
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
        :key="v._id"
        :title="`${v.rent_date}驾驶记录`"
      >
        <a-descriptions-item
          v-for="k in Object.keys(v)"
          :key="`${k}${v._id}`"
          :label="k"
        >
          {{ v[k as keyof leaseRecordType] }}
        </a-descriptions-item>
      </a-descriptions>
    </a-modal>
  </div>
</template>
