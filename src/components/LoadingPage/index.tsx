import { Center, Spinner } from "native-base";

type ILoadingPageProps = {
  loading: boolean;
};

export function LoadingPage(props: ILoadingPageProps) {
  if (!props.loading) return null;

  return (
    <Center
      flex={1}
      position={"absolute"}
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="rgba(0, 0, 0, 0.5)"
      zIndex={50}
    >
      <Spinner accessibilityLabel="Loading posts" color="green.200" size="lg" />
    </Center>
  );
}
