import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import { Slot, Redirect } from "expo-router";
import { useGlobalContext } from "@/lib/global-provider";

export default function AppLayout() {
  const { loading, isLoggedIn } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}