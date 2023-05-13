import Feed from "@components/Feed";

// unique file which will render home page
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center block">
          AI is here, for mostly better than worse
        </span>
      </h1>
      <p className="desc text-center">
        Pomptop - a place to discover and share AI prompts
      </p>

      <Feed />
    </section>
  );
};

export default Home;
