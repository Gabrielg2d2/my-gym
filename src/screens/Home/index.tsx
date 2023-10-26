import { HomeTemplate, IHomeTemplateProps } from "./template";

export function Home() {
  const propsTemplate: IHomeTemplateProps = {
    header: {
      signOut: () => {},
    },
    groups: {
      name: "Costas",
    },
  };

  return <HomeTemplate {...propsTemplate} />;
}
