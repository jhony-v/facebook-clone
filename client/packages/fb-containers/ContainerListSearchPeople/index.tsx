import faker from "faker";
import UserResultSearchedCard from "@fb-components/globals/UserResultSearchedCard";
import RoundButton from "@fb-components/common/RoundButton";
import { FaUserPlus } from "react-icons/fa";
import DarkTooltip from "@fb-components/common/DarkTooltip";
import Wrapper from "@fb-components/common/Wrapper";

const ContainerListSearchPeople = () => {
  return (
    <Wrapper>
      {Array(20)
        .fill(0)
        .map((e, i) => {
          return (
            <Wrapper m="10px auto 20px">
              <UserResultSearchedCard
                avatar={faker.random.image()}
                fullName="Jhony Vega"
                subtitle="16 friends"
                description="Owner and Founder at HELLO Ma Khaing Ma ChoUniversity of Yangon Main"
                rightComponent={
                  <DarkTooltip position="bottom" text="Add friend" w="100px">
                    <RoundButton dimension="40px">
                      <FaUserPlus size={20} />
                    </RoundButton>
                  </DarkTooltip>
                }
              />
            </Wrapper>
          );
        })}
    </Wrapper>
  );
};

export default ContainerListSearchPeople;
