import Wrapper from "@fb-components/common/Wrapper";
import ContainerListSearchPeople from "@fb-containers/ContainerListSearchPeople";

const SearchView = () => {
  return (
    <>
      <Wrapper />
      <Wrapper w="65%" m="2em auto">
        <ContainerListSearchPeople />
      </Wrapper>
    </>
  );
};

export default SearchView;
