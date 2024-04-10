'use client'
import { Form, Input, Checkbox, Link, Button, Space } from '@arco-design/web-react'
import { FormInstance } from '@arco-design/web-react/es/Form'
import FormItem from '@arco-design/web-react/es/Form/form-item'
import { IconLock, IconUser } from '@arco-design/web-react/icon'
import React, { useEffect, useRef, useState } from 'react'
export default function LoginForm() {
  const onSubmitClick = () => {}
  return (
    <div className={'bg-[#17171a] h-[100vh] w-[100vw]'}>
      <div className={'flex flex-col justify-center items-center h-full'}>
        <div className={'w-[400px] h-[400px] bg-[#1e1e1e] rounded-[20px]'}>
          <div className={'w-full h-full flex flex-col justify-center items-center'}>
            <h1 className="text-white text-3xl">登录</h1>
            <div className={'w-[300px] h-[300px]'}>
              <div className={''}>
                <Form style={{ width: 600 }} autoComplete="off">
                  <FormItem label="Username">
                    <Input placeholder="please enter your username..." />
                  </FormItem>
                  <FormItem label="Post">
                    <Input placeholder="please enter your post..." />
                  </FormItem>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
