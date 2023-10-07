<?php

class Furniture extends ProductPostController
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
        $this->setFurniture(
            $sku,
            $name,
            $price,
            $length,
            $width,
            $height,
            $productType
        );
    }
}
