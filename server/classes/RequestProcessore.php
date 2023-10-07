<?php

include_once '../classes/controllers/ProductGetController.php';
include_once '../classes/controllers/ProductPostController.php';
include_once '../classes/controllers/productDeletecontroller.php';

class RequestProcessore
{
    public function processRequest($method)
    {
        switch ($method) {
            case "GET":
                $getProducts = new ProductGetController();
                echo $getProducts->showProducts();
                break;
            case "POST":
                $postProduct = new ProductPostController();
                $data =  json_decode(file_get_contents("php://input"));
                $SKU = $data->sku;
                $name = $data->name;
                $price = $data->price;
                $weight = $data->weight;
                $size = $data->size;
                $length = $data->length;
                $width = $data->width;
                $height = $data->height;
                $productType = $data->productType;
                $postProduct->addProduct($SKU, $name, $price, $weight, $size, $length, $width, $height, $productType);
                break;
            case 'DELETE':
                $deletedItems = new ProductDeleteController();
                $data = json_decode(file_get_contents("php://input"));
                var_dump($data);
                foreach ($data as $key) {
                    $deletedItems->deletingProduct($key);
                }

                break;
        }
    }
}
