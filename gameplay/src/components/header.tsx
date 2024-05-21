import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { BorderlessButton, GestureHandlerRootView } from "react-native-gesture-handler";
import { colors } from "../styles/colors";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({title, action}: Props){
    return (
        <GestureHandlerRootView>
            <LinearGradient
                colors={[colors.secondary100, colors.secondary40]}
            >
                <BorderlessButton>
                    <Feather
                        name="arrow-left"
                        size={24}
                        color={colors.heading}
                    />
                </BorderlessButton>

                <Text>
                    {title} a
                </Text>

                {
                    action &&
                    <View>
                        {action}
                    </View>
                }

            </LinearGradient>
        </GestureHandlerRootView>
    )
}