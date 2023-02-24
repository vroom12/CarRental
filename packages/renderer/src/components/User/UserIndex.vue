<script setup lang="ts">
import {reactive, ref} from 'vue';
import {getTableColumns} from './config';
import type {CustomerItem} from '/@/interface/customer';
import {apiCustomerPage, apiCustomerDelete} from '/@/api/customer';
import UserModal from './UserModal.vue';
import UserDrivingRecordModal from './UserDrivingRecordModal.vue';
import UserForm from './UserForm.vue';

const columns = getTableColumns(false);
const page = ref(1);
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
    drivingRecord: [],
  },
});

const getUserList = async () => {
  const {data} = await apiCustomerPage({
    page: page.value,
    pageSize: pageSize.value,
  });
  if (data) {
    state.data = data.data.customers;
    page.value = data.data.page;
    pageSize.value = data.data.customers.length;
  }
};

const deleteUser = async (id: string) => {
  await apiCustomerDelete(id);
  getUserList();
};

const handleEditOrInsert = (val: {record?: CustomerItem; title: string}) => {
  refUserModal.value?.show(val);
};

const checkDrivingRecord = (val: CustomerItem['drivingRecord']) => {
  refUserDrivingRecordModal.value?.show(val);
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
