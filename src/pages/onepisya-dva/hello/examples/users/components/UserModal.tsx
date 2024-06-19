/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-18 12:00:03
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-19 02:01:04
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-dva/hello/examples/users/components/UserModal.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Form, Input, Modal } from 'antd';
import { Component } from 'react';
import type { CreateUser, User } from '../types';

interface WithUseFormHookProps {
  record: User;
  onOk: ((key: User['key'], values: CreateUser) => void) | ((values: CreateUser) => void);
  children: React.ReactNode;
}

// 使用函数重载定义 onOk 函数的类型
interface OkCallback {
  (values: CreateUser): void;
  (id: string, values: CreateUser): void;
}

interface UserEditModalProps {
  record: User;
  // onOk: ((id: User['key'], values: CreateUser) => void)|((values:CreateUser)=>void)
  onOk: OkCallback;
  children: React.ReactNode;
  form: any; // 这里可以根据你的表单定义更具体的类型
}

const FormItem = Form.Item;

class UserEditModal extends Component<UserEditModalProps, { visible: boolean }> {
  constructor(props: UserEditModalProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModalHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  // 提交之后会调用这个回调
  onFinish = (values: CreateUser) => {
    const { onOk } = this.props;
    console.log('ok', values);
    const { key } = this.props.record;
    // 使用可选链来安全地访问 key
    if (key) {
      onOk(key, values);
    } else {
      onOk(values);
    }
  };
  okHandler = () => {
    const { form } = this.props;
    form
      .validateFields({ validateOnly: true })
      .then(() => {
        // values: CreateUser
        // 这里也可以拿到 values
        form.submit(); // 调用回调
        this.hideModelHandler();
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  render() {
    const { children } = this.props;

    const { form } = this.props;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModalHandler}>{children}</span>
        <Modal
          title="Edit User"
          open={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form form={form} layout="horizontal" onFinish={this.onFinish}>
            <FormItem
              initialValue={this.props.record.name}
              {...formItemLayout}
              label="Name"
              name="name"
            >
              <Input />
            </FormItem>
            <FormItem
              initialValue={this.props.record.address}
              {...formItemLayout}
              label="Address"
              name="address"
            >
              <Input />
            </FormItem>
            <FormItem
              initialValue={this.props.record.age}
              {...formItemLayout}
              label="Age"
              name="age"
            >
              <Input />
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

const withUseFormHook = (Component: React.ComponentType<any>): React.FC<WithUseFormHookProps> => {
  return (props: any) => {
    const [form] = Form.useForm();
    return <Component {...props} form={form} />;
  };
};

const ModalH = (props: WithUseFormHookProps) => {
  const UserEditModalH = withUseFormHook(UserEditModal);
  return <UserEditModalH {...props} />;
};

export default ModalH;
