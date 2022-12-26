import type {ColumnType} from 'ant-design-vue/lib/table';

export const getTableColumns = (isMobile: boolean) => {
  const columns: ColumnType[] = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      width: '20%',
      align: 'center',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      align: 'center',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
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
