import CustomButton from "@/components/CustomButton";
import InputField from "@/components/inputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
const SignIn = () => {
  const [form, setForm] = useState({
    eamil:"",
    password:""
  })
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="Relative w-full h-[250px]">
          <Image className="w-full h-[250px]" source={images.signUpCar} />
          <Text className="text-4xl font-JakartaSemiBold text-black bottom-5 left-5">
            Welcome
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label={"Email"}
            placeholder="Enter name"
            icon={icons.email}
            value={form.eamil}
            onChangeText={(value) => setForm({ ...form, eamil: value })}
          />
          <InputField
            label={"Password"}
            placeholder="Enter name"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
            secureTextEntry
          />
          <CustomButton
            title="Sign In"
            // onPress={onSignUpPress}
            className="mt-6"
          />
            <OAuth/>
          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            Don't have an account?{" "}
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
