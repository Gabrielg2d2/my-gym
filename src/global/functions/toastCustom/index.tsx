type IArrayMessages = Array<string>;
import { ITypeMessage_GLOBAL } from "@global/types/typeMessage";
import { useToast } from "native-base";

type IPlacement =
  | "top"
  | "bottom"
  | "top-right"
  | "top-left"
  | "bottom-left"
  | "bottom-right";

function getTypeColorMessage(typeMessage: ITypeMessage_GLOBAL) {
  switch (typeMessage) {
    case "error":
      return "red.500";
    case "warning":
      return "yellow.500";
    case "info":
      return "blue.500";
    case "success":
      return "green.500";
    default:
      return "gray.500";
  }
}

export function toastCustom(
  toast: ReturnType<typeof useToast>,
  message: string,
  typeMessage: ITypeMessage_GLOBAL = "error",
  placement: IPlacement = "top"
) {
  return toast.show({
    title: message,
    placement,
    duration: 5000,
    bgColor: getTypeColorMessage(typeMessage),
  });
}
