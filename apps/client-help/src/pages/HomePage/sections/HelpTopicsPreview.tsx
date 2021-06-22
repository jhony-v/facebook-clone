import { styled, css } from "../../../lib/stitches.config";
import { FiSearch } from "react-icons/fi";
import InputEngineOptions from "../../../components/InputEngineOptions";
import { useAtom } from "jotai";
import { 
  filterDetailInformationIdAtom, 
  textFilterInformationAtom,
} from "../../../stores/searchDetailInformation";
import ResultSearchedItemInformation from "../components/ResultSearchedItemInformation";
import { navigate } from "@reach/router";

const InputWrapper = styled("div", {
  backgroundColor: "$text200",
  borderRadius: "20px",
  fontSize: "15px",
  marginTop: "10px",
  marginBottom: "10px",
  alignItems: "center",
  padding: "25px",
  width: "$full",
  display: "flex",
  boxSizing: "border-box",
  color : "$text",
  "& input" : {
    color : "inherit"
  }
});

const cssInputEngine = css({
  marginLeft: "10px",
  fontSize : "1rem",
  flex: 1,
  "&::placeholder": {
    color: "$text500",
  },
});

const cssColorIcon = css({
  color: "$text500",
});
const cssContentResult = css({
  boxShadow : "0 10px 20px rgba(0,0,0,.2)",
  position : "absolute",
  backgroundColor : "$bg",
  width : "100%",
  overflowY : "auto",
  maxHeight : "350px",
  borderRadius : "10px",
  "&::-webkit-scrollbar" : {
    width : "8px"
  },
  "&::-webkit-scrollbar-thumb" : {
    backgroundColor : "$button",
    borderRadius : "10px"
  },
  "&::-webkit-scrollbar-button" : {
    background : "transparent",
    height : "5px"
  }
})

const cssContainer = css({
  position : "relative"
})


const HelpTopicsPreview = () => {
  const [ listId ] = useAtom(filterDetailInformationIdAtom);
  const [ , filterDetailInformation] = useAtom(textFilterInformationAtom);
  return (
    <div>
      <InputEngineOptions
        data={listId}
        classNames={{
          content : cssContentResult(),
          container : cssContainer()
        }}
        onInputValueChange={value => {
          if(value) filterDetailInformation(value)
        }}
        onItemSelected={itemSelected => {
          navigate(itemSelected.id)
        }}
        itemToString={item => item ? item.id : ""}
        renderInput={(getInputProps) => {
          return (
            <InputWrapper role="input">
              <FiSearch className={cssColorIcon()} size={20} />
              <input className={cssInputEngine()} {...getInputProps()} placeholder="Search help articles..."/>
            </InputWrapper>
          );
        }}
        renderItem={(item) => {
          return <ResultSearchedItemInformation item={item} />;
        }}
      />
    </div>
  );
};

export default HelpTopicsPreview;
