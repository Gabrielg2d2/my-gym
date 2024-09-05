import { ITypeMessage_GLOBAL } from "@domain/types/typeMessage";
import { useToast as useToastNativeBase } from "native-base";

type IPlacement =
  | "top"
  | "bottom"
  | "top-right"
  | "top-left"
  | "bottom-left"
  | "bottom-right";

function getTypeColorMessage(typeMessage: ITypeMessage_GLOBAL) {
  switch (typeMessage) {
    case "fatal":
      return "red.500";
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

type IOptionsToast = {
  placement: IPlacement;
  duration: number;
};

export function useToastCustom() {
  const toastNativeBase = useToastNativeBase();

  function toastCustom(
    message: string,
    typeMessage: ITypeMessage_GLOBAL,
    options?: IOptionsToast
  ) {
    if (!message) {
      return;
    }

    return toastNativeBase.show({
      title: message,
      placement: options?.placement ?? "top",
      duration: options?.duration ?? 8000,
      bgColor: getTypeColorMessage(typeMessage),
    });
  }

  return {
    toastCustom,
  };
}
