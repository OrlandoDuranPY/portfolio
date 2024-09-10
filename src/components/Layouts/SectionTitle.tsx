type SectionTitleProps = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className='text-3xl lg:text-4xl font-palanquin mb-5 lg:mb-10 text-white font-gloria'>
      {children}
    </h2>
  );
};
