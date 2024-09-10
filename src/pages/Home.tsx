export const Home = () => {
  return (
    <div className='container mx-auto py-14 lg:py-0 px-8 lg:px-0'>
      <div className='w-full flex flex-col gap-5'>
        <h1 className='text-white text-7xl lg:text-9xl font-bold font-jost mb-5 lg:mb-10'>
          <span className='block'>
            Hola, <span className='wave-hand'>👋🏼</span>
          </span>
          soy <span className='text-fuccia'>Orlando</span> Durán!
        </h1>
        <h2 className='text-white text-opacity-50 font-gloria text-3xl lg:text-6xl'>
          Full-stack developer
        </h2>
      </div>
    </div>
  );
};
