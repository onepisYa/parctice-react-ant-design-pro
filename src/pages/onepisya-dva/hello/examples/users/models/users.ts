/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-17 16:00:19
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-19 02:16:59
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-dva/hello/examples/users/models/users.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Effect, Reducer } from 'umi';
import * as usersService from '../services/users';
import type { User } from '../types/index';

// 定义全局 state 的类型
export interface GlobalState {
  users: UserState;
  // ... 其他模型的状态
  loading: {
    models: {
      users: boolean;
    };
  };
}

export type UserState = {
  list: User[];
  total: number | null;
  page: number | null;
};

export interface UserModelType {
  namespace: string;
  state: UserState;
  effects: {
    fetch: Effect;
    remove: Effect;
    patch: Effect;
    create: Effect;
  };
  reducers: {
    save: Reducer<UserState>;
  };
  subscriptions?: {
    setup: Effect;
  };
}

const UserModel: UserModelType = {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state: UserState, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, { page });
      const saveAction = {
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      };
      yield put(saveAction);
    },

    *remove({ payload: id }, { call, put, select }) {
      yield call(usersService.remove, id);
      // 调用方法
      const page: number = yield select((state: GlobalState) => state.users.page);
      // 获取数据
      if (page) {
        yield put({ type: 'fetch', payload: { page } });
        // 触发 action fetch
      }
    },

    *patch({ payload: { id, values } }, { call, put, select }) {
      yield call(usersService.patch, id, values);
      const page: number = yield select((state: GlobalState) => state.users.page);
      if (page) {
        yield put({ type: 'fetch', payload: { page } });
      }
    },

    *create({ payload: values }, { call, put, select }) {
      yield call(usersService.create, values);
      const page: number = yield select((state: GlobalState) => state.users.page);
      if (page) {
        yield put({ type: 'fetch', payload: { page } });
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(
        ({
          location: { pathname, search },
        }: {
          location: {
            pathname: string;
            search: string;
          };
        }) => {
          // return history.listen(({location:{ pathname, search}, action}) => {
          if (pathname === '/onepisya-dva/hello') {
            dispatch({ type: 'fetch', payload: search });
          }
        },
      );
    },
  },
};

export default UserModel;
