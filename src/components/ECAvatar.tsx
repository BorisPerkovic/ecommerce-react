import { Avatar, AvatarProps } from "@mui/material";
import { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";

interface ECAvatarProps extends AvatarProps {
  user: string;
}

export const ECAvatar: FunctionComponent<ECAvatarProps> = ({ user }) => {
  const avatarUsername = user.split(" ");
  const avatarPlaceholder = `${avatarUsername[0]
    .charAt(0)
    .toUpperCase()}${avatarUsername[1].charAt(0).toUpperCase()}`;

  const { palette } = useAppTheme();
  return (
    <Avatar
      sx={{
        backgroundColor: palette.success.main,
        color: palette.common.white,
        marginRight: 1,
      }}
    >
      {avatarPlaceholder}
    </Avatar>
  );
};
