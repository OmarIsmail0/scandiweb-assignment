import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ form, page, func }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid black",
          marginBottom: 15,
        }}
      >
        <div>
          <h1>{page === "form" ? "Product Add" : "Product List"}</h1>
        </div>
        <div>
          <Link to={page === "form" ? "" : "/addproduct"}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={page === "form" ? () => form.submit() : null}
              style={{ marginRight: 5 }}
            >
              {page === "form" ? "Save" : "ADD"}
            </Button>
          </Link>
          <Link to={page === "form" ? "/" : "#"}>
            <Button
              id={page !== "form" && "delete-product-btn"}
              style={{ marginLeft: 5 }}
              onClick={func}
            >
              {page === "form" ? "Cancel" : "MASS DELETE"}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
