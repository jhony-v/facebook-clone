import EditText from "@fb-components/common/EditText";
import Wrapper from "@fb-components/common/Wrapper";
import { Control, Controller, FieldError } from "react-hook-form";
import StyledGlobal from "./elements";

type FormEditTextProps = {
  field: {
    name: string;
    placeholder: string;
    type: string;
  };
  control: Control<Record<string, any>>;
  errors: {
    error: boolean | undefined | FieldError;
    message: string;
  };
};

const FormEditText = ({ control, field, errors }: FormEditTextProps) => (
  <Controller
    name={field.name}
    control={control}
    defaultValue=""
    rules={{
      required: true
    }}
    render={(props) => (
      <Wrapper m="20px 0">
        <EditText
          type={field.type}
          name={props.name}
          onChange={props.onChange}
          placeholder={field.placeholder}
          variant="outline"
          fluid
        />
        {errors.error && (
          <StyledGlobal.TextDanger>{errors.message}</StyledGlobal.TextDanger>
        )}
      </Wrapper>
    )}
  />
);

export default FormEditText;
