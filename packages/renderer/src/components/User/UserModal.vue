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
    gender: 0,
    integral: 0,
  },
});

const handleOk = async () => {
  if (title.value === '新增') {
    const {success, data} = await apiCustomerInsert(state.formVal);
    if (success && data) {
      message.success('新增成功');
    }
  } else if (title.value === '编辑') {
    const {success, data} = await apiCustomerUpdate(state.formVal, id.value);
    if (success && data) {
      message.success('修改成功');
    }
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
    state.formVal.gender = val.record.gender;
    state.formVal.integral = val.record.integral;
    id.value = val.record._id;
  } else {
    state.formVal.name = '';
    state.formVal.phone = '';
    state.formVal.address = '';
    state.formVal.gender = 0;
    state.formVal.integral = 0;
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
