import { Preferences } from "@/components/Preferences";
import { Skills } from "@/components/Skills";
import { User } from "@/components/User";
import { Input } from "@/components/Input";
import { Image, Text, View } from "react-native";
import { Button } from "@/components/Button";

export function Profile() {
  return (
    <View className="flex-1 bg-gray-700">
      <Image source={require("@/assets/banner.png")}
      className="w-full h-52 -mb-16" />

      <View className="flex-1 px-4 pb-4">
        <User />
        <Skills />
        <Preferences />
        <View>
          <Input placeholder="Company" inputClasses="mb-6" label="Company" />
        </View>
        <Button label="Save" />
      </View>
    </View>
  )
}  