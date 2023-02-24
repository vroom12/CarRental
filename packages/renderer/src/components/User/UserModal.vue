<script setup lang="ts">
import {reactive, ref} from 'vue';
import type {CustomerItem} from '/@/interface/customer';
import {apiCustomerInsert, apiCustomerUpdate} from '/@/api/customer';
import {message} from 'ant-design-vue';

const emits = defineEmits(['update']);
const modalVisible = ref(false);
const title = ref('');
const id = ref('');
const state = reactive<{
  formVal: Omit<CustomerItem, '_id'>;
}>({
  formVal: {
    name: '',
    phone: '',
    address: '',
    drivingRecord: [],
  },
});

const handleOk = async () => {
  if (title.value === '新增') {
    const res = await apiCustomerInsert(state.formVal);
    message.success(res.data.message);
  } else if (title.value === '编辑') {
    const res = await apiCustomerUpdate(state.formVal, id.value);
    message.success(res.data.message);
  }
  emits('update');
  modalVisible.value = false;
};

const show = (val: {record?: CustomerItem; title: string}) => {
  title.value = val.title;
  if (val.title === '编辑' && val.record) {
    state.formVal.name = val.record.name;
    state.formVal.phone = val.record.phone;
    state.formVal.address = val.record.address;
    state.formVal.drivingRecord = val.record.drivingRecord;
    id.value = val.record._id;
    console.log(val.record);
  }
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
      :title="title"
      @ok="handleOk"
    >
      123
    </a-modal>
  </div>
</template>
