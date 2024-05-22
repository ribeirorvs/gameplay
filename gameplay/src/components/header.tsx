import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { BorderlessButton, GestureHandlerRootView } from "react-native-gesture-handler";
import { colors } from "../styles/colors";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { layout } from "../styles/layout";
import { text } from "../styles/text";
import { Link } from "expo-router";

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({title, action}: Props){
    return (
        
            <LinearGradient
                colors={[colors.secondary100, colors.secondary40]}
                style={layout.headerAppointment}
            >
                <Link href="home" asChild>
                    <BorderlessButton>
                        <Feather
                            name="arrow-left"
                            size={24}
                            color={colors.heading}
                        />
                    </BorderlessButton>
                </Link>

                <Text style={text.headerAppointmentTitle}>
                    {title} 
                </Text>

                {
                    action &&
                    <View>
                        {action}
                    </View>
                }

            </LinearGradient>
        
    )
}