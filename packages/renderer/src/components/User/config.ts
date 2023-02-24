import type {ColumnType} from 'ant-design-vue/lib/table';

export const getTableColumns = (isMobile: boolean) => {
  const columns: ColumnType[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      align: 'center',
    },
    {
      title: '电话',
      dataIndex: 'phone',
      key: 'phone',
      width: '20%',
      align: 'center',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
      width: '20%',
      align: 'center',
    },
    {
      title: '驾驶记录',
      dataIndex: 'drivingRecord',
      key: 'drivingRecord',
      width: '20%',
      align: 'center',
    },
  ];
  if (!isMobile) {
    columns.push({
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      width: '20%',
      align: 'center',
    });
  }
  return columns; // 这里返回的是一个数组
};

export const getFormColumns = (selectQuery: Array<'name' | 'phone' | 'address'>) => {
  const columns = [
    {
      label: '选择查询条件',
      prop: 'selectQuery',
      type: 'checkbox-group',
      isShow: true,
      options: [
        {
          label: '姓名',
          value: 'name',
          type: 'checkbox',
        },
        {
          label: '电话',
          value: 'phone',
          type: 'checkbox',
        },
        {
          label: '地址',
          value: 'address',
          type: 'checkbox',
        },
      ],
    },
    {
      label: '姓名',
      prop: 'name',
      type: 'input',
      isShow: selectQuery.includes('name'),
    },
    {
      label: '电话',
      prop: 'phone',
      type: 'input',
      isShow: selectQuery.includes('phone'),
    },
    {
      label: '地址',
      prop: 'address',
      type: 'input',
      isShow: selectQuery.includes('address'),
    },
  ];
  return columns; // 这里返回的是一个数组
};
