import { GestureHandlerRootView, RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import { layout } from "../styles/layout";

export function ButtonAdd({...rest} : RectButtonProps){
    return (
        <GestureHandlerRootView>
            <RectButton style={layout.buttonAdd}>
                <MaterialCommunityIcons 
                    name="plus"
                    color={colors.heading}
                    size={24}
                />
            </RectButton>
        </GestureHandlerRootView>
    )
}