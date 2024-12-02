import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/inputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";
const SignUp = () => {
  const [form, setForm] = useState({
    name:"",
    eamil:"",
    password:""
  })
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="Relative w-full h-[250px]">
          <Image className="w-full h-[250px]" source={images.signUpCar} />
          <Text className="text-4xl font-JakartaSemiBold text-black bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label={"Name"}
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
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
            title="Sign Up"
            // onPress={onSignUpPress}
            className="mt-6"
          />
            <OAuth/>
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            Already have an account?{" "}
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
