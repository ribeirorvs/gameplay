import { Image } from "react-native";
import { img } from "../styles/imgs";



export function GuildIcon(){
    const uri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiF6zKmrlVb_XvJXKk7vYHRkN2PakRTaV8kg&usqp=CAU"
    return (
        <Image 
            source={{uri}}
            style={img.guildIcon}
            resizeMode="cover"
        />
    )
}