import { ECText } from "../../components/ECText";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { Grid, useTheme } from "@mui/material";

export const TopNavBarInfo = () => {
  const { palette, spacing } = useTheme();

  return (
    <Grid>
      <Grid container component={"article"}>
        <LocalPhoneOutlinedIcon
          htmlColor={palette.primary.light}
          fontSize="small"
        />
        <ECText
          textAlign="left"
          variant={"body1"}
          component={"p"}
          textColor={palette.primary.light}
          space={spacing(0, 1.2)}
        >
          +381695382477
        </ECText>
        <MailOutlinedIcon htmlColor={palette.primary.light} fontSize="small" />
        <ECText
          variant={"body1"}
          component={"p"}
          textAlign="left"
          textColor={palette.primary.light}
          space={spacing(0, 1.2)}
        >
          borisperkovic89@yahoo.com
        </ECText>
      </Grid>
    </Grid>
  );
};
