import { GestureHandlerRootView, RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import { layout } from "../styles/layout";
import { Link } from "expo-router";

export function ButtonAdd({...rest} : RectButtonProps){
    return (
        <GestureHandlerRootView>
            <Link href="appointmentCreate" asChild>
                <RectButton style={layout.buttonAdd}>
                    <MaterialCommunityIcons 
                        name="plus"
                        color={colors.heading}
                        size={24}
                    />
                </RectButton>
            </Link>
        </GestureHandlerRootView>
    )
}