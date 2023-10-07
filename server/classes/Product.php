<?php
// include_once './Database.php';
include_once 'Database.php';
class Product extends Database
{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    protected function getProducts()
    {
        $sql = "SELECT * FROM product";
        $this->db->query($sql);
        return $this->db->resultSet();
    }


    protected function setBook($sku, $name, $price, $weight, $productType)
    {
        $sql = "INSERT INTO product(sku, name, price, weight, productType)
                 VALUES (:sku, :name, :price, :weight, :productType)";
        $this->db->query($sql);
        foreach (array(
            "sku" => $sku,
            "name" => $name,
            "price" => $price,
            "weight" => $weight,
            "productType"  => $productType
        ) as $propName => $propValue) {
            $this->db->bind(':' . $propName, $propValue);
        }
        $this->db->execute();
    }

    protected function setDvd($sku, $name, $price, $size, $productType)
    {
        $sql = "INSERT INTO product(sku, name, price, size, productType) 
        VALUES (:sku, :name, :price, :size, :productType)";
        $this->db->query($sql);
        $this->db->query($sql);
        foreach (array(
            "sku" => $sku,
            "name" => $name,
            "price" => $price,
            "size" => $size,
            "productType"  => $productType
        ) as $propName => $propValue) {
            $this->db->bind(':' . $propName, $propValue);
        }
        $this->db->execute();
    }

    protected function setFurniture($sku, $name, $price, $length, $width, $height, $productType)
    {
        $sql = "INSERT INTO product(sku, name, price, length, width, height, productType)
         VALUES (:sku, :name, :price, :length, :width, :height, :productType)";
        $this->db->query($sql);
        $this->db->query($sql);
        foreach (array(
            "sku" => $sku,
            "name" => $name,
            "price" => $price,
            "length" => $length,
            "width" => $width,
            "height" => $height,
            "productType"  => $productType
        ) as $propName => $propValue) {
            $this->db->bind(':' . $propName, $propValue);
        }
        $this->db->execute();
    }

    protected function deleteProduct($sku)
    {
        $sql = "DELETE FROM product WHERE sku = :sku";
        $this->db->query($sql);
        $this->db->bind(':sku', $sku);
        $this->db->execute();
    }

    public function showProducts()
    {
        return json_encode($this->getProducts());
    }
}
