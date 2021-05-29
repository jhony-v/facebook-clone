import { css, styled } from "../lib/stitches.config";
import BaseButton from "../ui/BaseButton";
import TetraText from "../ui/TetraText";
import { CgSmileSad } from "react-icons/cg";
import { RiEmotionHappyLine } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import { useState } from "react";
import BaseText from "../ui/BaseText";
import Anchor from "../ui/Anchor";
import BaseRadioButton from "../ui/BaseRadioButton";

const FixedCard = styled("div", {
  position: "fixed",
  bottom: "40px",
  right: "40px",
  background: "$bg100",
  boxShadow: "0 10px 20px rgba(0,0,0,.13)",
  borderRadius: "5px",
  padding: "10px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
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

const cssCloseConfirmationIcon = css({
  color: "$text500",
  cursor: "pointer",
});

enum HELPFUL_ACTIONS {
  YES = "YES",
  NO = "NO",
}

const FloatingMessageVerifyConfirmation = () => {
  const [selected, setSelected] = useState<HELPFUL_ACTIONS | "">("");
  const [open, setOpen] = useState(true);
  const [showingMessage, setShowingMessage] = useState(false);
  const [ negativeOptionChecked, setNegativeOptionChecked ] = useState("");

  const showingNoOption = HELPFUL_ACTIONS.NO === selected && !showingMessage;
  const showingAllOptionsFinally =
    (selected === HELPFUL_ACTIONS.YES || selected === HELPFUL_ACTIONS.NO) &&
    showingMessage;

  const onYes = () => {
    setSelected(HELPFUL_ACTIONS.YES);
    setShowingMessage(true);
  };

  const onNot = () => {
    setSelected(HELPFUL_ACTIONS.NO);
  };

  const onSubmit = () => {
    setOpen(false);
  };

  const titleOFConfirmation = () =>
    ({
      [HELPFUL_ACTIONS.YES]: "How could it be better?",
      [HELPFUL_ACTIONS.NO]: "What went wrong?",
      "": "Was this helpful?",
    }[selected]);

  const onCheckNegativeOption  = (name : string) => ({
    onChange : (e : string) => {
      setNegativeOptionChecked(e);
      setShowingMessage(true);
    },
    value : name,
    checked : name === negativeOptionChecked
  })

  if (open)
    return (
      <FixedCard>
        <FlexWrapperHeaderDetail>
          <TetraText>{titleOFConfirmation()}</TetraText>
          <VscClose
            size={22}
            onClick={() => setOpen(false)}
            className={cssCloseConfirmationIcon()}
          />
        </FlexWrapperHeaderDetail>
        {selected && (
          <div>
            {showingMessage && (
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
            {(showingNoOption) && (
              <div>
                <Spacing>
                  <BaseRadioButton
                    label="The information is confusing"
                    name="negativeOption"
                    {...onCheckNegativeOption("a")}
                  />
                </Spacing>
                <Spacing>
                  <BaseRadioButton
                    label="The solution doesn't work"
                    name="negativeOption"
                    {...onCheckNegativeOption("b")}
                  />
                </Spacing>
                <Spacing>
                  <BaseRadioButton
                    label="I don't like the product or policy"
                    name="negativeOption"
                    {...onCheckNegativeOption("c")}
                  />
                </Spacing>
                <Spacing>
                  <BaseRadioButton
                    label="Other"
                    name="negativeOption"
                    {...onCheckNegativeOption("d")}
                  />
                </Spacing>
              </div>
            )}
          </div>
        )}
        {showingAllOptionsFinally && (
          <BaseButton size="base" autoWidth onClick={onSubmit}>
            Submit
          </BaseButton>
        )}
        {!selected && (
          <FlexWrapperOptions>
            <BaseButton size="base" icon={RiEmotionHappyLine} onClick={onYes}>
              Yes
            </BaseButton>
            <BaseButton size="base" icon={CgSmileSad} onClick={onNot}>
              No
            </BaseButton>
          </FlexWrapperOptions>
        )}
      </FixedCard>
    );

  return null;
};

export default FloatingMessageVerifyConfirmation;
