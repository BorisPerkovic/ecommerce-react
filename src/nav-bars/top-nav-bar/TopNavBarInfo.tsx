import { ECText } from "../../components/ECText";
import { useAppTheme } from "../../theme/theme";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  icons: {
    marginRight: "10px",
  },
});

export const TopNavBarInfo = () => {
  const {
    colors: { topNavBArTextColor },
  } = useAppTheme();
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" flexDirection="row">
        <LocalPhoneOutlinedIcon
          fontSize="small"
          htmlColor={topNavBArTextColor}
          className={classes.icons}
        />
        <ECText
          textAlign="left"
          component="p"
          textColor={topNavBArTextColor}
          margin="0 20px 0 0"
        >
          +381695382477
        </ECText>
      </Box>
      <Box display="flex" flexDirection="row">
        <MailOutlinedIcon
          fontSize="small"
          htmlColor={topNavBArTextColor}
          className={classes.icons}
        />
        <ECText textAlign="left" component="p" textColor={topNavBArTextColor}>
          borisperkovic89@yahoo.com
        </ECText>
      </Box>
    </Box>
  );
};
