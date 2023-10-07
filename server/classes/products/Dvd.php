<?php

class Dvd extends ProductPostController
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
        $this->setDvd($sku, $name, $price, $size, $productType);
    }
}
