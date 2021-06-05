import { useState } from "react";
import { css } from "../../../../lib/stitches.config";
import InputEngineOptions from "../../../InputEngineOptions";
import languages from "../../../../data/languages.data"
import TetraText from "../../../../ui/TetraText";

const cssInputEngine = css({
  padding: 17,
  borderRadius: 5,
  border: "1px solid $button",
  color: "$text",
  width: "100%",
  boxSizing: "border-box",
  marginBottom: 40,
  fontSize: "1em",
  "&:focus": {
    borderColor: "$text",
    borderWidth: 2,
  },
});

const cssEngine = {
    contentItems : css({
        position : "absolute",
        width : "100%",
        top : 60,
        background : "$bg",
        boxShadow : "0 10px 20px rgba(0,0,0,.1)"
    }),
    container : css({
        position : "relative"
    })
}


type InputEngineLanguagesProps = {
    onItemLanguageSelected : (language : any) => void
}
const InputEngineLanguages = (props : InputEngineLanguagesProps) => {
  const [ languagesFiltered, setLanguages ] = useState<any[]>([]);   
  return (
    <div>
      <InputEngineOptions
        classNames={{
            content : cssEngine.contentItems(),
            container : cssEngine.container()
        }}
        data={languagesFiltered}
        onItemSelected={props.onItemLanguageSelected}
        itemToString={item => item ? item.name : ""}
        onInputValueChange={(value) => {
          const normalizeTexInput = value.toLowerCase();
          setLanguages(() => (
              languages.filter(language => language.name.toLowerCase().startsWith(normalizeTexInput))
          ));
        }}
        renderInput={(getInputProps) => {
          return  <input className={cssInputEngine()} {...getInputProps()} placeholder="Search languages..."/>
        }}
        renderItem={(item : any) => {
          return <TetraText>{item.name}</TetraText>;
        }}
      />
    </div>
  );
};

export default InputEngineLanguages;
