import React, { useState } from "react";
import {
  Form,
  Input,
  Cascader,
  Select,
  Checkbox,
  Button,
  AutoComplete,
  InputNumber,
  DatePicker,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import SingIn from "../pages/SingIn";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";

const { Option } = Select;
const residences = [
  {
    value: "Ecuador",
    label: "Ecuador",
    children: [
      {
        value: "Pichincha",
        label: "Pichincha",
        children: [
          {
            value: "Quito",
            label: "Quito",
          },
          {
            value: "Otro",
            label: "Otra Ciudad",
          },
        ],
      },
      {
        value: "Guayas",
        label: "Guayas",
        children: [
          {
            value: "Guayaquil",
            label: "Guayaquil",
          },
          {
            value: "Otro",
            label: "Otra Ciudad",
          },
        ],
      },
      {
        value: "Azuay",
        label: "Azuay",
        children: [
          {
            value: "Cuenca",
            label: "Cuenca",
          },
          {
            value: "Otro",
            label: "Otra Ciudad",
          },
        ],
      },
      {
        value: "Otro",
        label: "Otra provincia",
      },
    ],
  },
  {
    value: "Estados Unidos",
    label: "Estados Unidos",
  },
  {
    value: "España",
    label: "España",
  },
  {
    value: "Otro",
    label: "Otro país",
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 2,
    },
  },
};

export default function Register() {
  const [form] = Form.useForm();
  const [register, setRegister] = useState(true);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    createUser(values);
    history.push("/profile");
  };

  const createUser = async (values) => {
    await auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log("Usuario", user);
        console.log("user id", user.uid);

        writeUserData(values, user.uid);

        alert("Nuevo usuario registrado con éxito!");
      })
      .catch((error) => {
        console.log(
          "No fue posible registrar su nuevo usuario en la base de datos"
        );
      });
  };
  
  function writeUserData(values, userID) {
    db.ref("users/" + userID).set({
      name: values.name,
      email: values.email,
      // photo : values.photo,
      phoneNumber: values.phone,
      website: values.website,
      //city: values.city,
      //birthday: values.birthday,
      age: values.age,
      uid: userID,
    });
    console.log("upload complete!", userID, values.name);
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+1</Option>
        <Option value="87">+34</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  //para subir la foto
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  let history = useHistory();

  return (
    <div>
      {register ? (
        <div>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              city: ["Ecuador", "Pichincha", "Quito"],
              prefix: "593",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="Correo Electrónico"
              rules={[
                {
                  type: "email",
                  message: "Escriba un correo válido!",
                },
                {
                  required: true,
                  message: "Por favor escriba un e-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Clave"
              rules={[
                {
                  required: true,
                  message: "Por favor escriba una clave!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirme su clave"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Por favor confirme su clave!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("Las dos claves no cohinciden!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="name"
              label="Nombre Completo"
              tooltip="Cuál es tu nombre completo?"
              rules={[
                {
                  required: true,
                  message: "Por favor escriba su nombre completo!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="age"
              label="Edad"
              rules={[
                {
                  type: "number",
                  required: true,
                  min: 10,
                  max: 99,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Fecha de Nacimiento"
              name="birthday"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              name="photo"
              label="Subir Foto de Perfil"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="Suba la foto que más le guste"
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click para subir</Button>
              </Upload>
            </Form.Item>

            <Form.Item
              name="city"
              label="Ciudad de Residencia"
              rules={[
                {
                  type: "array",
                  required: true,
                  message: "Por favor escriba su ciudad de residencia!",
                },
              ]}
            >
              <Cascader options={residences} />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Número de teléfono"
              rules={[
                {
                  required: true,
                  message: "Por favor escriba su número de teléfono!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              name="website"
              label="Página Web"
              rules={[
                {
                  required: false,
                  message: "Please input website!",
                },
              ]}
            >
              <AutoComplete
                options={websiteOptions}
                onChange={onWebsiteChange}
                placeholder="website"
              >
                <Input />
              </AutoComplete>
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Registrarse
              </Button>
            </Form.Item>
          </Form>
          <Button type="primary" onClick={() => setRegister(false)}>
            Iniciar Sesión
          </Button>{" "}
        </div>
      ) : (
        <SingIn />
      )}
    </div>
  );
}
