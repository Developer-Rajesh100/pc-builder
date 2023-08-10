import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className=" w-3/4 mx-auto mb-24">
      <h1 className="mb-16 text-5xl text-center">Faq</h1>
      <Accordion
        title="Accordion Item 1"
        content="This is the content of Accordion Item 1."
      />
      <Accordion
        title="Accordion Item 2"
        content="This is the content of Accordion Item 2."
      />
      <Accordion
        title="Accordion Item 3"
        content="This is the content of Accordion Item 3."
      />
      <Accordion
        title="Accordion Item 4"
        content="This is the content of Accordion Item 4."
      />
      <Accordion
        title="Accordion Item 5"
        content="This is the content of Accordion Item 5."
      />
      <Accordion
        title="Accordion Item 6"
        content="This is the content of Accordion Item 6."
      />
    </div>
  );
};

export default Faq;
