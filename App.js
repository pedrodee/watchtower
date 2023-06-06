import { NativeBaseProvider } from "native-base";
import { RootNavigator } from "./navigator/RootNavigator";


export default function App() {
  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>
  );
}
