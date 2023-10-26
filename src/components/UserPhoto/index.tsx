import { Avatar, IAvatarProps } from "native-base";

type UserPhotoProps = IAvatarProps & {
  size?: number;
};

export function UserPhoto({ size = 16, ...props }: UserPhotoProps) {
  return (
    <Avatar w={size} h={size} borderWidth={2} borderColor="black" {...props} />
  );
}
