function CompanyItem() {
  return (
    <div className='flex flex-col items-center overflow-hidden border rounded-lg md:flex-row'>
      <div className='relative self-start block w-full h-48 overflow-hidden bg-gray-100 group shrink-0 md:h-full md:w-32 lg:w-48'>
        <img
          src='https://images.unsplash.com/photo-1665412019489-1928d5afa5cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
          loading='lazy'
          alt='Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê.'
          className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
        />
      </div>
      <div className='flex flex-col gap-2 p-4 lg:p-6'>
        <span className='text-sm text-gray-400'>2022-10-13T11:32</span>
        <h2 className='text-xl font-bold text-gray-800'>
          Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê.
        </h2>
        <p className='text-gray-500'>
          Nghịch cảnh là một phần của cuộc sống. Nó không thể bị kiểm soát. Cái
          có thể kiểm soát chính là cách chúng ta phản ứng trước nghịch cảnh.
        </p>
        <div>
          <div className='inline-flex rounded-md shadow-sm' role='group'>
            <button
              type='button'
              className='px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            >
              Edit
            </button>
            <button
              type='button'
              className='px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyItem
