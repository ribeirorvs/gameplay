import { 
    Text,
    Image,
    View,
    TouchableOpacity
} from "react-native";

import DiscordImg from '../assets/discord.png';
import { layout } from "../styles/layout";
import { img } from "../styles/imgs";
import { text } from "../styles/text";

interface Props {
    title: string;
}

export function ButtonIcon({title} : Props){
    return (
        <TouchableOpacity
            style={layout.buttonContainer}
            activeOpacity={0.6}
        >
            <View style={layout.iconWrapper}>
                <Image source={DiscordImg} style={img.icon}/>
            </View>
            <Text style={text.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}