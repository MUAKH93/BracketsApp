import { SafeAreaView } from "react-native";
import { AppNavigator } from "./screens/navigation/appNavigation";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
      <Toast />
    </SafeAreaView>
  );
}
