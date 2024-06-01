/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-01 02:54:49
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-01 03:42:16
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-reducer/examples/Form.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { ChangeEvent, Reducer, useReducer } from 'react';
import styles from './form.styles.less';
type State = {
  name: string;
  age: number;
};

enum ActionType {
  IncrementedAge = 'incremented_age',
  ChangedName = 'changed_name',
}

type Action = { type: ActionType; nextName?: State['name'] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.IncrementedAge: {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case ActionType.ChangedName: {
      return {
        name: action.nextName!,
        age: state.age,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState: State = { name: 'Taylor', age: 42 };

export default function Form() {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: ActionType.IncrementedAge });
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: ActionType.ChangedName,
      nextName: e.target.value,
    });
  }

  return (
    <>
      <div className={styles['onpeisya-reducer']}>
        <input value={state.name} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Increment age</button>
        <p>
          Hello, {state.name}. You are {state.age}.
        </p>
      </div>
    </>
  );
}
