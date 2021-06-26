import { styled } from "../lib/stitches.config";
import BaseButton from "../ui/BaseButton";
import TetraText from "../ui/TetraText";
import { CgSmileSad } from "react-icons/cg";
import { RiEmotionHappyLine } from "react-icons/ri";
import { useReducer } from "react";
import BaseText from "../ui/BaseText";
import Anchor from "../ui/Anchor";
import BaseRadioButton from "../ui/BaseRadioButton";
import FloatingCard from "../ui/FloatingCard";
import FloatingMessage from "../ui/FloatingMessage";
import CloseActionIcon from "../ui/CloseActionIcon";

const FixedCard = styled(FloatingCard, {
  width: "300px",
});

const Spacing = styled("div", {
  my: "10px",
});

const FlexWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
});

const FlexWrapperOptions = styled(FlexWrapper, {
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gap: 10,
});

const FlexWrapperHeaderDetail = styled(FlexWrapper, {
  justifyContent: "space-between",
  marginBottom: 15,
});

const InputSubmitDataInformation = styled("textarea", {
  borderRadius: "5px",
  padding: "20px",
  fontSize: "1.1rem",
  border: "1px solid $text300",
  my: "20px",
  boxSizing: "border-box",
  width: "100%",
  height: "200px",
  resize: "none",
  color: "$text",
});



enum HELPFUL_ACTIONS {
  YES = "YES",
  NO = "NO",
}
enum Actions {
  OPTION_YES,
  OPTION_NOT,
  SUBMIT,
  ON_CLOSE,
  SET_NEGATIVE_OPTION_CHECKED,
}

type FloatingMessageAction = {
  type :  Actions;
  payload ?: any
}


type FloatingMessageState = {
  selected : HELPFUL_ACTIONS | "",
  open : boolean;
  showingMessage : boolean;
  negativeOptionChecked : string;
}

const floatingMessageInitialState : FloatingMessageState = {
  selected : "",
  open : true,
  showingMessage : false,
  negativeOptionChecked : "",
}


const floatingMessageReducer = (state : FloatingMessageState, action:FloatingMessageAction) : FloatingMessageState => {
  switch(action.type) {
    case Actions.OPTION_YES:
      return {
        ...state,
        selected : HELPFUL_ACTIONS.YES,
        showingMessage : true,
      };
    case Actions.OPTION_NOT:
      return {
        ...state,
        selected : HELPFUL_ACTIONS.NO,
      }
    case Actions.SUBMIT:
      return {
        ...state,
        open : false,
      }
    case Actions.ON_CLOSE:
      return {
        ...state,
        selected : "",
        open : false,
      }
    case Actions.SET_NEGATIVE_OPTION_CHECKED:
      return {
        ...state,
        negativeOptionChecked : action.payload,
        showingMessage : true,
      }
    default:
      return state;
  }
}


const FloatingMessageVerifyConfirmation = () => {
  const [ state, dispatch ] = useReducer(floatingMessageReducer, floatingMessageInitialState);

  const showingNoOption = HELPFUL_ACTIONS.NO === state.selected && !state.showingMessage;
  const showingAllOptionsFinally = (state.selected === HELPFUL_ACTIONS.YES || 
                                    state.selected === HELPFUL_ACTIONS.NO) &&
                                    state.showingMessage;

  const emit = (type:Actions, payload?:any) => dispatch({type, payload});

  const titleConfirmation = () =>
    ({
      [HELPFUL_ACTIONS.YES]: "How could it be better?",
      [HELPFUL_ACTIONS.NO]: "What went wrong?",
      "": "Was this helpful?",
    }[state.selected]);

  const getCheckNegativeOption  = (name : string) => ({
    onChange : (e : string) => {
      emit(Actions.SET_NEGATIVE_OPTION_CHECKED, e);
    },
    value : name,
    checked : name === state.negativeOptionChecked
  })

  if (state.open)
    return (
      <FixedCard position="bottom-right">
        <FlexWrapperHeaderDetail>
          <TetraText>{titleConfirmation()}</TetraText>
          <CloseActionIcon onClick={() => emit(Actions.ON_CLOSE)} />
        </FlexWrapperHeaderDetail>
        {state.selected && (
          <div>
            {state.showingMessage && (
              <BaseText size="small">
                Keep in mind that this form is for feedback only and you won’t
                receive a reply. Please don’t include personal information about
                you or someone else. Learn more about how to
                <Anchor to="/" text=" report something to Facebook." />
                <InputSubmitDataInformation
                  placeholder="(Optional)"
                  spellCheck="false"
                />
              </BaseText>
            )}
            {showingNoOption && (
              <div>
                <Spacing>
                  <BaseRadioButton
                    label="The information is confusing"
                    name="negativeOption"
                    {...getCheckNegativeOption("a")}
                  />
                </Spacing>
                <Spacing>
                  <BaseRadioButton
                    label="The solution doesn't work"
                    name="negativeOption"
                    {...getCheckNegativeOption("b")}
                  />
                </Spacing>
                <Spacing>
                  <BaseRadioButton
                    label="I don't like the product or policy"
                    name="negativeOption"
                    {...getCheckNegativeOption("c")}
                  />
                </Spacing>
                <Spacing>
                  <BaseRadioButton
                    label="Other"
                    name="negativeOption"
                    {...getCheckNegativeOption("d")}
                  />
                </Spacing>
              </div>
            )}
          </div>
        )}
        {showingAllOptionsFinally && (
          <BaseButton size="base" autoWidth onClick={() => emit(Actions.SUBMIT)}>
            Submit
          </BaseButton>
        )}
        {!state.selected && (
          <FlexWrapperOptions>
            <BaseButton size="base" icon={RiEmotionHappyLine} onClick={() => emit(Actions.OPTION_YES)}>
              Yes
            </BaseButton>
            <BaseButton size="base" icon={CgSmileSad} onClick={() => emit(Actions.OPTION_NOT)}>
              No
            </BaseButton>
          </FlexWrapperOptions>
        )}
      </FixedCard>
    );

  return state.selected ? (
    <FloatingMessage title="Tanks" message="Your feedback helps improve this answer for everyone." />
  ) : null;

};

export default FloatingMessageVerifyConfirmation;
