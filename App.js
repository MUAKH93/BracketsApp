import { SafeAreaView } from "react-native";
import { AppNavigator } from "./screens/navigation/appNavigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  );
}
