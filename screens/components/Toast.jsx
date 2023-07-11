import { Toast } from "react-native-toast-message/lib/src/Toast";
//import Toast from "react-native-toast-message";

function showToast(tostType, toastMessage, toastPosition) {
  Toast.show({
    type: tostType,
    text1: "Hi",
    text2: toastMessage,
    position: toastPosition,
    duration: 1000,
  });
}

export { showToast };
