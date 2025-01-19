const SectionWrapper = ({ children, id = "" }) => {
  return (
    <section
      id={id}
      className="items-center grid scroll-m-6 mx-auto px-4 max-w-6xl min-h-screen text-primary dark:text-dark-text"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
