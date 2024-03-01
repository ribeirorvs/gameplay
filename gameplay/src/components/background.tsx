import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../styles/colors";
import { ReactNode } from "react";
import { layout } from "../styles/layout";

type Props ={
    children: ReactNode;
    styleName: keyof typeof layout;
}

export default function Background({children, styleName}: Props){
    return (
        <LinearGradient
            style={layout[styleName]}
            colors={[colors.secondary80, colors.secondary100]}
        >
            {children}
        </LinearGradient>
    )
}