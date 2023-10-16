const Products = () => {
  return (
    <div>
      <div>Search</div>

      <div className='flex gap-6'>
        <div className='basis-1/3'>filters</div>
        <div className='basis-2/3'>
          <div>item counter: 10</div>

          <div className='flex flex-wrap justify-center items-stretch gap-6'>
            <div className='flex-1'>a</div>
            <div className='flex-1'>b</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
