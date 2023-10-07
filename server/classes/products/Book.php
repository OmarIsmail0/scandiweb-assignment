<?php

class Book extends ProductPostController
{
    public function setProduct(
        $sku,
        $name,
        $price,
        $weight,
        $productType,
        $size,
        $length,
        $width,
        $height
    ) {
        $this->setBook($sku, $name, $price, $weight, $productType);
    }
}
