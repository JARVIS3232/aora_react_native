import { Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const EmptyState = ({ title, subtitle, savedState }) => {
  return (
    <SafeAreaView className="justify-center items-center px-4 ">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-xl text-center font-psemibold text-white mt-2">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>
      <CustomButton
        title={`${savedState ? "Go to home" : "Create video"}`}
        handlePress={() => router.push(`${savedState ? "/home" : "/create"}`)}
        containerStyles="w-full my-5"
      />
    </SafeAreaView>
  );
};

export default EmptyState;
