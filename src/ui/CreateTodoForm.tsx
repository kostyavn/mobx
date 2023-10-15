import { FC } from 'react'
import { Button, Form, Input } from 'antd';
import { observer } from "mobx-react-lite"

// models
import Todos  from '../models';

// types
import { CreateForm, Todo } from '../types';


const CreateTodoForm: FC = observer(() => {

  const handleSubmit = (form: Omit<Todo, 'id' | 'completed'>) =>{
      const newTodo = {...form, completed: false};
      Todos.createTodo(newTodo)
  }

  console.log('111', Todos.todos);

  return (
    <Form
    name="basic"
    layout="vertical"
    style={{ maxWidth: 800 }}
    initialValues={{ remember: true }}
    onFinish={handleSubmit}
    autoComplete="off"
  >
    <Form.Item<CreateForm>
      label="Title"
      name="title"
      rules={[{ required: true, message: 'Please input title!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<CreateForm>
      label="Description"
      name="description"
      rules={[{ required: true, message: 'Please enter description!' }]}
    >
      <Input />
    </Form.Item>


    <Form.Item>
      <Button type="primary" htmlType="submit">
        Create Todo
      </Button>
    </Form.Item>
  </Form>
  )
})

export default CreateTodoForm