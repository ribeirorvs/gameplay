import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";
import { layout } from "../styles/layout";
import { img } from "../styles/imgs";
import { colors } from "../styles/colors";

type Props = {
    urlImage: string;
}

export function Avatar({urlImage}: Props){
    return (
        <View
            style={layout.avatar}
        >
            <Image
                source={{uri: urlImage}}
                style={img.avatar}
            />
        </View>
    )
}