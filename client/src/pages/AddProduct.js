import React, { useMemo, useState } from "react";
import { Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { getProducts, postProduct } from "../api/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [val, setVal] = useState("DVD");
  const [message, setMessage] = useState();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const [errorMsg, setErrorMsg] = useState("");
  const [valid, setValid] = useState("");

  function setProducts() {
    getProducts().then((e) => setData(e.data));
  }

  useMemo(() => {
    setProducts();
  }, []);

  const onFinish = (values) => {
    values.productType = val;
    console.log(data.some((product) => product.sku === values.sku));
    if (data.some((product) => product.sku === values.sku)) {
      setErrorMsg("this sku product already exists");
      setValid("error");
      toast.error(errorMsg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setErrorMsg("");
      setValid("");
      postProduct(values).then(({ data }) => console.log(data));
      console.log("Success:", values);
      navigate("/");
    }
  };
  const onFinishFailed = (errorInfo) => {
    setErrorMsg("");
    setValid("");
    console.log("Failed:", errorInfo);
    setMessage("Please, Provide required data");
  };
  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <>
      <Header form={form} page="form" />
      <ToastContainer
        style={{ marginBottom: "3%" }}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />

      <Form
        id="product_form"
        form={form}
        name="basic"
        size="large"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 750,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="SKU"
          validateStatus={valid !== "" ? valid : undefined}
          help={errorMsg !== "" ? errorMsg : null}
          name="sku"
          rules={[
            {
              required: true,
              message: "Please, provide the data of indicated type",
            },
          ]}
        >
          <Input id="sku" />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please, provide the data of indicated type",
            },
          ]}
        >
          <Input id="name" />
        </Form.Item>
        <Form.Item
          id="price"
          label="Price ($)"
          name="price"
          rules={[
            {
              required: true,
              message: "Please, provide the data of indicated type",
            },
          ]}
        >
          <Input id="price" />
        </Form.Item>

        <Form.Item label="Select" name={"productType"}>
          {/* <Select onChange={setVal} defaultValue={"DVD"}>
              <Select.Option value="DVD">DVD</Select.Option>
              <Select.Option value="Book">Book</Select.Option>
              <Select.Option value="Furniture">Furniture</Select.Option>
            </Select> */}
          <select
            id="productType"
            style={{
              borderRadius: "10px",
              border: "2px solid #000",
              width: "100%",
              height: "40px",
            }}
            value={val}
            onChange={handleChange}
          >
            <option value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </select>
        </Form.Item>

        {val === "DVD" && (
          <>
            <Form.Item
              label="Size (MB)"
              name="size"
              rules={[
                {
                  required: true,
                  message: "Please, provide the data of indicated type",
                },
              ]}
            >
              <Input id="size" />
            </Form.Item>

            <div
              style={{
                marginLeft: "32.88%",
              }}
            >
              <Typography.Text style={{ fontSize: 16 }} strong>
                * Please, Provide size
              </Typography.Text>
            </div>
          </>
        )}
        {val === "Furniture" && (
          <>
            <Form.Item
              label="Height (CM)"
              name="height"
              rules={[
                {
                  required: true,
                  message: "Please, provide the data of indicated type",
                },
              ]}
            >
              <Input id="height" />
            </Form.Item>
            <Form.Item
              label="Width (CM)"
              name="width"
              rules={[
                {
                  required: true,
                  message: "Please, provide the data of indicated type",
                },
              ]}
            >
              <Input id="width" />
            </Form.Item>
            <Form.Item
              label="Length (CM)"
              name="length"
              rules={[
                {
                  required: true,
                  message: "Please, provide the data of indicated type",
                },
              ]}
            >
              <Input id="length" />
            </Form.Item>

            <div
              style={{
                marginLeft: "32.88%",
              }}
            >
              <Typography.Text style={{ fontSize: 16 }} strong>
                * Please, Provide dimensions
              </Typography.Text>
            </div>
          </>
        )}
        {val === "Book" && (
          <>
            <Form.Item
              label="Weight (KG)"
              name="weight"
              rules={[
                {
                  required: true,
                  message: "Please, provide the data of indicated type",
                },
              ]}
            >
              <Input id="weight" />
            </Form.Item>
            <div
              style={{
                marginLeft: "32.88%",
              }}
            >
              <Typography.Text style={{ fontSize: 16 }} strong>
                * Please, Provide weight
              </Typography.Text>
            </div>
          </>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginTop: 24,
          }}
        >
          <Typography.Text type="danger" underline strong>
            {message}
          </Typography.Text>
        </div>
      </Form>
    </>
  );
};

export default AddProduct;
