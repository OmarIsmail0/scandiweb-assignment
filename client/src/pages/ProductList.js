import { Card, Checkbox, Col, Row, Typography } from "antd";
import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import { deleteProduct, getProducts } from "../api/apiCalls";

const ProductList = () => {
  const { Text } = Typography;
  const [data, setData] = useState([]);
  const [checkedList, setCheckedList] = useState();

  function setProducts() {
    getProducts()
      .then((e) => setData(e.data))
      .catch((e) => console.log(e));
  }
  useMemo(() => {
    setProducts();
  }, []);

  const onChange = (checkedValues) => {
    setCheckedList(checkedValues);
  };

  const deleteProducts = () => {
    deleteProduct(checkedList).then((e) => setProducts());
  };

  return (
    <>
      <Header form={null} page={"main"} func={deleteProducts} />
      <div style={{ marginBottom: 15 }}>
        <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
          <Row gutter={[24, 16]}>
            {data?.map((e, index) => (
              <Col sm={6} xs={12} key={index}>
                <Card
                  style={{
                    borderRadius: 0,
                    border: "3px solid #000",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    flexDirection: "column-reverse",
                    minHeight: 265,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Checkbox
                      className="delete-checkbox"
                      value={e.sku}
                      style={{
                        position: "absolute",
                        left: 20,
                        top: 20,
                      }}
                    />
                    <Text style={{ fontSize: 24 }} strong>
                      {e.sku}
                    </Text>
                    <Text style={{ fontSize: 24 }} strong>
                      {e.name}
                    </Text>
                    <Text
                      style={{ fontSize: 24 }}
                      strong
                    >{`${e.price} $`}</Text>
                    <Text style={{ fontSize: 24 }} strong>
                      {e.size !== null && `Size: ${e.size} MB`}
                    </Text>
                    <Text style={{ fontSize: 24 }} strong>
                      {e.weight !== null && `Weight: ${e.weight} KG`}
                    </Text>
                    <Text style={{ fontSize: 24 }} strong>
                      {e.width !== null &&
                        `Dimension: ${e.height}x${e.width}x${e.length}`}
                    </Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </div>
    </>
  );
};

export default ProductList;
