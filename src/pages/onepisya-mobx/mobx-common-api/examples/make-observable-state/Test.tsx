/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-16 04:19:47
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-16 04:19:49
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya-mobx/mobx-common-api/examples/make-observable-state/Test.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { observable, runInAction } from "mobx"
import { observer } from "mobx-react"

const state = observable({ value: 0 })

runInAction(() => {
    state.value++
    state.value++
})


export default observer(()=>{
    return <div>{state.value}</div>
})

