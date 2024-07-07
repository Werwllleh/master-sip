import React from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from 'antd';

const FormQuestion = () => {
  return (
    <Form
      variant="filled"
      className="form-custom"
      layout="vertical"
    >
      <div className="form-custom__header">
        <h3 className="form-custom__title">Задайте Ваш вопрос</h3>
        <p className="form-custom__text">
          C радостью ответим на ваши вопросы, произведем расчет стоимости услуг и подготовим индивидуальное коммерческое предложение.
        </p>
      </div>
      <Form.Item
        label="Ваше имя:"
        name="Input"
        rules={[
          {
            required: true,
            message: 'Обязательно для заполнения',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default FormQuestion;
