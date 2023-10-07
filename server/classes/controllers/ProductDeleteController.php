    <?php

    include_once '../classes/product.php';

    class ProductDeleteController extends Product
    {
        public function deletingProduct($spec)
        {
            $this->deleteProduct($spec);
        }
    }
