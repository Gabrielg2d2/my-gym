type IArrayMessages = Array<string>;
import { useToast } from "native-base";

type IPlacement =
  | "top"
  | "bottom"
  | "top-right"
  | "top-left"
  | "bottom-left"
  | "bottom-right";

export function toastCustom(
  toast: ReturnType<typeof useToast>,
  messages: IArrayMessages = [],
  errors: IArrayMessages = [],
  placement: IPlacement = "top"
) {
  if (errors.length > 0) {
    return errors.forEach((error) =>
      toast.show({
        title: error,
        placement,
        duration: 5000,
        bgColor: "red.500",
      })
    );
  }

  if (messages.length > 0) {
    return messages.forEach((message) =>
      toast.show({
        title: message,
        placement,
        duration: 4000,
      })
    );
  }
}
