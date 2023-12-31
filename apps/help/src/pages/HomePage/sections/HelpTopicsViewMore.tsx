import TopicCard from "../../../components/TopicCard";

const HelpTopicsViewMore = () => {
  return (
    <div>
      <TopicCard
        topic={{
          name: "Visit Business Help Center",
          description: "Learn more about promoting your business on Facebook",
          icon : "/assets/images/help/business.png",
          id : "a20"
        }}
        direction="row"
      />
    </div>
  );
};

export default HelpTopicsViewMore;
