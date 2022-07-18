type ButtonVariant =
  | "primaryButtonContained"
  | "primaryButtonOutlined"
  | "deleteAccountButton"
  | "loginButton"
  | "logoutButton"
  | "disabledButton";

export type ButtonTheme = {
  [variant in ButtonVariant]: ButtonVariantStyle;
};

export interface ButtonVariantStyle {
  containerStyle?: ContainerStyle;
  labelStyle?: LabelSTyle;
}

interface ContainerStyle {
  backgroundColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
}

interface LabelSTyle {
  color: string;
}
