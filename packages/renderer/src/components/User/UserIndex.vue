<script setup lang="ts">
import {reactive} from 'vue';
import {getTableColumns} from './config';
import type {UserItem} from '/@/interface/user';

const columns = getTableColumns(false);
const state = reactive<{
  data: UserItem[];
}>({
  data: [],
});

const getData = async () => {
  // const {data} = await fetch('/api/user').then((res) => res.json());
  // state.data = data;
  // 模拟数据
  state.data = [
    {
      id: 1,
      name: '张三',
      username: 'zhangsan',
      password: '123456',
      email: '123',
      phone: '123',
    },
    {
      id: 2,
      name: '李四',
      username: 'lisi',
      password: '123456',
      email: '123',
      phone: '123',
    },
    {
      id: 3,
      name: '王五',
      username: 'wangwu',
      password: '123456',
      email: '123',
      phone: '123',
    },
  ];
};

getData();
</script>

<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="state.data"
      :row-key="(record:any) => record.id"
    >
      <template #bodyCell="{column, record, index}">
        <template v-if="column.dataIndex === 'action'">
          {{ record.id }}{{ column.dataIndex }}{{ index }}
        </template>
      </template>
    </a-table>
  </div>
</template>
