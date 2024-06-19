/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-17 16:42:31
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-19 01:34:39
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-dva/hello/examples/users/components/Users.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
// import { connect } from 'dva';
import { connect } from '@umijs/max';
import { Button, Pagination, Popconfirm, Table } from 'antd';
import PropTypes from 'prop-types';
import { PAGE_SIZE } from '../constants';
import type { UserState } from '../models/users';
import { GlobalState } from '../models/users';
import type { CreateUser, User } from '../types/index';
import UserModal from './UserModal';
import styles from './Users.css';

function Users({
  dispatch,
  loading,
  list: dataSource,
  total,
  page: current,
}: {
  dispatch: (arg: { type: string; payload: any }) => void;
  loading: boolean;
  list: UserState['list'];
  total: UserState['total'];
  page: UserState['page'];
}) {
  console.log('path', current);

  function deleteHandler(id: User['key']) {
    dispatch({
      type: 'users/remove',
      payload: id,
    });
  }

  function pageChangeHandler(page: UserState['page']) {
    console.log('page', page);
    dispatch({ type: 'users/fetch', payload: { page } });
  }
  function editHandler(id: User['key'], values: CreateUser) {
    console.log('edit', id, values);

    dispatch({
      type: 'users/patch',
      payload: { id, values },
    });
  }

  function createHandler(values: CreateUser) {
    dispatch({
      type: 'users/create',
      payload: values,
    });
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a href="">{text}</a>,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Age',
      dataIndex: 'age', // dataIndex 用于访问 data 中的属性字段
      key: 'age',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text: any, record: User) => (
        <span className={styles.operation}>
          <UserModal record={record} onOk={editHandler}>
            <a rel="noreferrer">Edit</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.key)}>
            <a rel="noreferrer">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <UserModal record={{} as User} onOk={createHandler}>
            <Button type="primary">Create User</Button>
          </UserModal>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={(record) => record.key!}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total!}
          current={current!}
          disabled={loading}
          pageSize={PAGE_SIZE}
          onChange={(e) => pageChangeHandler(e)}
        />
      </div>
    </div>
  );
}
// 在 js 中对 react 的 Props 进行类型处理
Users.propTypes = {
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
  list: PropTypes.array,
  total: PropTypes.number,
  page: PropTypes.number,
};

function mapStateToProps(state: GlobalState) {
  const { list, total, page } = state.users;
  console.log('path', state);

  return {
    list,
    total,
    page,
    loading: state.loading.models.users,
  };
}

export default connect(mapStateToProps)(Users);
