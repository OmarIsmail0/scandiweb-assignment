<?php

include_once '../classes/Product.php';

class ProductGetController extends Product
{
    public function showProducts()
    {
        return json_encode($this->getProducts());
    }
}
