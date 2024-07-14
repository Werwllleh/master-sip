import React from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import MaskedInput from "antd-mask-input";
import Link from "next/link";

const FormCall = () => {
  return (
    <Form
      variant="filled"
      className="form-custom form-custom-call"
      layout="vertical"
    >
      <div className="form-custom__header">
        <h3 className="form-custom__title">Закажите звонок</h3>
        <p className="form-custom__text">
          C радостью перезвоним в удобное для Вас время.
        </p>
      </div>
      <div className="form-custom__fields">
        <Form.Item
          label="Ваше имя"
          name="Input"
          rules={[
            {
              required: true,
              message: 'Поле обязательно для заполнения',
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="phone"
          label="Номер телефона"
          rules={[
            {
              required: true,
              message: 'Укажите номер телефона',
            },
            {
              pattern: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
              message: 'Укажите номер телефона полностью',
            },
          ]}
        >
          <MaskedInput
            addonBefore="+7"
            mask="(000)-000-00-00"
          />
        </Form.Item>
      </div>
      <div className="form-custom__accept">
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Подтвердите согласие')),
            },
          ]}
        >
          <Checkbox>
            Я согласен на <Link target="_blank" className="form-custom__accept-link" href={"/agreement"} >обработку персональных данных</Link>
          </Checkbox>
        </Form.Item>
      </div>
      <div className="form-custom__submit">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default FormCall;
