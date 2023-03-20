<script setup lang="ts">
import {reactive, ref} from 'vue';
import {getTableColumns} from './config';
import type {CustomerItem} from '/@/interface/customer';
import {apiCustomerPage, apiCustomerDelete, apiFindBuCustomerId} from '/@/api/customer';
import UserModal from './UserModal.vue';
import UserDrivingRecordModal from './UserDrivingRecordModal.vue';
import UserForm from './UserForm.vue';
import {message} from 'ant-design-vue';

const columns = getTableColumns(false);
const pageNumber = ref(1);
const pageSize = ref(10);
const refUserModal = ref<InstanceType<typeof UserModal>>();
const refUserDrivingRecordModal = ref<InstanceType<typeof UserDrivingRecordModal>>();
const state = reactive<{
  data: CustomerItem[];
  formVal: Omit<CustomerItem, '_id'>;
}>({
  data: [],
  formVal: {
    name: '',
    phone: '',
    address: '',
    gender: 0,
    integral: 0,
  },
});

const getUserList = async () => {
  const {success, data} = await apiCustomerPage({
    pageNumber: pageNumber.value,
    pageSize: pageSize.value,
  });
  if (success && data) {
    state.data = data;
  }
};

const deleteUser = async (id: string) => {
  const {success, data} = await apiCustomerDelete(id);
  if (success && data) {
    message.success('删除成功');
  }
  getUserList();
};

const handleEditOrInsert = (val: {record?: CustomerItem; title: string}) => {
  refUserModal.value?.show(val);
};

const checkDrivingRecord = async (id: string) => {
  const {success, data} = await apiFindBuCustomerId({
    customerId: id,
  });
  if (success && data) {
    refUserDrivingRecordModal.value?.show(data);
  }
};

getUserList();
</script>

<template>
  <div class="h-user">
    <div class="h-user-top">
      <user-form />
      <a-button
        @click="
          handleEditOrInsert({
            title: '新增',
          })
        "
      >
        新增
      </a-button>
    </div>
    <a-table
      :columns="columns"
      :data-source="state.data"
      :row-key="(record:any) => record._id"
    >
      <template #bodyCell="{column, record}">
        <template v-if="column.dataIndex === 'drivingRecord'">
          <a-button
            type="link"
            @click="checkDrivingRecord(record.drivingRecord)"
          >
            查看驾驶记录
          </a-button>
        </template>
        <template v-if="column.dataIndex === 'action'">
          <a-button
            @click="
              handleEditOrInsert({
                record,
                title: '编辑',
              })
            "
          >
            编辑
          </a-button>
          <a-button
            type="primary"
            danger
            @click="deleteUser(record._id)"
          >
            删除
          </a-button>
        </template>
      </template>
    </a-table>
    <user-modal
      ref="refUserModal"
      @update="getUserList"
    />
    <user-driving-record-modal ref="refUserDrivingRecordModal" />
  </div>
</template>
