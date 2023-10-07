    <?php

    include_once '../classes/product.php';

    class ProductPostController extends Product
    {
        public function addProduct(
            $sku,
            $name,
            $price,
            $weight,
            $size,
            $length,
            $width,
            $height,
            $productType
        ) {
            $weight !== null && $this->setBook($sku, $name, $price, $weight, $productType);
            $size !== null && $this->setDvd($sku, $name, $price, $size, $productType);
            $height !== null && $this->setFurniture(
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
