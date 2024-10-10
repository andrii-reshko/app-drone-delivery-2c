import PageMeta from "@/components/common/page-meta.tsx";

const Home = () => {
  return (
    <>
      <PageMeta title={"Home"} />
      <article
        data-testid={"home"}
        className={
          "d-flex flex-column justify-content-center align-items-center flex-fill"
        }
      >
        <h1>Hello, User</h1>
        <p>Welcome to our app</p>
      </article>
    </>
  );
};

export default Home;
