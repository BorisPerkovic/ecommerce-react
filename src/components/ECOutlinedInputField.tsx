import {
  FormControl,
  InputAdornment,
  OutlinedInputProps,
  TextField,
} from "@mui/material";
import { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";

interface ECOutlinedInputFieldProps extends OutlinedInputProps {
  placeholder: string;
  startAndorment?: React.ReactNode;
  endAndorment?: React.ReactNode;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const ECOutlinedInputField: FunctionComponent<
  ECOutlinedInputFieldProps
> = ({ placeholder, startAdornment, endAdornment, onChange }) => {
  const { palette } = useAppTheme();

  return (
    <FormControl fullWidth>
      <TextField
        variant="outlined"
        sx={{
          "& .MuiInputBase-root": {
            height: "48px",
            borderRadius: "30px",
            color: palette.secondary.light,
            fontFamily: "Montserrat, sans-serif",
            "& > fieldset": {
              borderColor: palette.secondary.main,
            },
          },
          "& .MuiInputBase-root:hover": {
            "& > fieldset": {
              borderColor: palette.secondary.light,
            },
          },
          "& .MuiInputBase-root.Mui-focused": {
            "& > fieldset": {
              borderWidth: "1px",
              borderColor: palette.secondary.light,
            },
          },
        }}
        placeholder={placeholder}
        InputProps={{
          startAdornment: startAdornment ? (
            <InputAdornment
              sx={{
                color: palette.secondary.main,
                padding: "0px 5px",
                justifyContent: "center",
                alignItems: "center",
              }}
              position="start"
            >
              {startAdornment}
            </InputAdornment>
          ) : null,
          endAdornment: endAdornment ? (
            <InputAdornment
              sx={{
                color: palette.secondary.main,
                padding: "0px 5px",
                justifyContent: "center",
                alignItems: "center",
              }}
              position="end"
            >
              {endAdornment}
            </InputAdornment>
          ) : null,
        }}
        onChange={onChange}
        autoComplete="off"
      />
    </FormControl>
  );
};
