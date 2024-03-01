import { 
    Text,
    Image,
    View,
} from "react-native";

import DiscordImg from '../assets/discord.png';
import { layout } from "../styles/layout";
import { img } from "../styles/imgs";
import { text } from "../styles/text";
import { Link } from "expo-router";
import { RectButton, GestureHandlerRootView } from "react-native-gesture-handler";

interface Props {
    title: string;
}

export function ButtonIcon({title} : Props){
    return (
        <GestureHandlerRootView>
            <Link href={"home"} asChild>
                <RectButton
                    style={layout.buttonContainer}
                >
                    <View style={layout.iconWrapper}>
                        <Image source={DiscordImg} style={img.icon}/>
                    </View>
                    <Text style={text.buttonText}>
                        {title}
                    </Text>
                </RectButton>
            </Link>
        </GestureHandlerRootView>
    )
}