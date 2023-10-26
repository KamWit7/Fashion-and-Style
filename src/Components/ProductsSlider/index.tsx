import { useMemo } from 'react';
import { ProductCard, Slider } from '@components';
import { ProductsSliderType } from '@components/ProductsSlider/types';

function ProductsSlider(productsData: Awaited<ProductsSliderType['productsData']>) {
  const Items = useMemo(
    () => productsData.products.models.map((p) => <ProductCard key={p.uid} {...p} />),
    [productsData]
  );

  return (
    <>
      <Slider className="hidden md:block">{Items}</Slider>
      <Slider slidesPerView={2} className="md:hidden">
        {Items}
      </Slider>
    </>
  );
}
export default ProductsSlider;
