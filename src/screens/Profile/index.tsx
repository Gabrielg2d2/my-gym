import { useState } from "react";
import { IProfileTemplateProps, ProfileTemplate } from "./template";

export function Profile() {
  const [name, setName] = useState<string>("Gabriel");
  const [email, setEmail] = useState<string>("gabriel@gmail.com");
  const [urlAvatar, setUrlAvatar] = useState<string>(
    "https://github.com/Gabrielg2d2.png"
  );

  async function handleEditPhoto(newUri: string) {
    setUrlAvatar(newUri);
  }

  const propsTemplate: IProfileTemplateProps = {
    name,
    email,
    urlAvatar,
    handleEditPhoto,
  };

  return <ProfileTemplate {...propsTemplate} />;
}
