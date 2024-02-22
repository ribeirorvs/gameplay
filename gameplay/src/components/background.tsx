import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../styles/colors";
import { ReactNode } from "react";
import { layout } from "../styles/layout";

type Props ={
    children: ReactNode;
}

export default function Background({children}: Props){
    return (
        <LinearGradient
            style={layout.container}
            colors={[colors.secondary80, colors.secondary100]}
        >
            {children}
        </LinearGradient>
    )
}