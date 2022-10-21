import faker from "faker";
import UserResultSearchedCard from "@fb-components/globals/UserResultSearchedCard";
import RoundButton from "@fb-components/common/RoundButton";
import { FaUserPlus } from "react-icons/fa";
import DarkTooltip from "@fb-components/common/DarkTooltip";
import Wrapper from "@fb-components/common/Wrapper";
import { peopleSearchResult } from "@mocks/index";

const ContainerListSearchPeople = () => (
  <Wrapper>
    {peopleSearchResult.getPeople().map((e, i) => (
      <Wrapper m="10px auto 20px" key={i}>
        <UserResultSearchedCard
          avatar={faker.random.image()}
          fullName={e.fullName}
          subtitle={e.subtitle}
          description={e.description}
          rightComponent={
            <DarkTooltip position="bottom" text="Add friend" w="100px">
              <RoundButton dimension="40px">
                <FaUserPlus size={20} />
              </RoundButton>
            </DarkTooltip>
          }
        />
      </Wrapper>
    ))}
  </Wrapper>
);

export default ContainerListSearchPeople;
