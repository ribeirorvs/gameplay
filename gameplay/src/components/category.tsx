import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { GestureHandlerRootView, RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { colors } from "../styles/colors";
import { Text, View } from "react-native";
import { layout } from "../styles/layout";
import { text } from "../styles/text";


type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox = true,
    ...rest
}: Props){
    return (
        <GestureHandlerRootView>
            <RectButton {...rest}>
                <LinearGradient
                    style={layout.category}
                    colors={[colors.secondary50, colors.secondary70]}
                >
                    <LinearGradient 
                        style={[layout.categoryContent, {opacity: checked ? 1: 0.5}]}
                        colors={[ checked ? colors.secondary85 : colors.secondary50, colors.secondary40]}    
                    >
                        {
                            hasCheckBox &&
                            <View style={checked ? layout.checked: layout.uncheck} />
                        }
                        <Icon
                            height={48}
                            width={48}
                        />
                        <Text style={text.categoryTitle}>
                            {title}
                        </Text>
                    </LinearGradient>
                </LinearGradient>
                
            </RectButton>
        </GestureHandlerRootView>
    );
}