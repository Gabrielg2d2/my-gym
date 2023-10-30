import { IProfileTemplateProps, ProfileTemplate } from "./template";

export function Profile() {
  function handleEditPhoto() {
    console.log("Edit Photo");
  }

  const propsTemplate: IProfileTemplateProps = {
    urlAvatarUser: "https://github.com/Gabrielg2d2.png",
    handleEditPhoto,
  };

  return <ProfileTemplate {...propsTemplate} />;
}
