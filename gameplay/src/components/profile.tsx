import { Text, View } from "react-native";
import { layout } from "../styles/layout";
import { text } from "../styles/text";
import { Avatar } from "./avatar";

export function Profile (){
    return (
        <View style={layout.profileContainer}>
            <Avatar 
                urlImage="https://github.com/ribeirorvs.png"
            />
            <View>
                <View style={layout.user}>
                    <Text style={text.greeting}>
                        Olá,
                    </Text>
                    <Text style={text.username}>
                        Rodrigo
                    </Text>
                </View>
                <Text style={text.message}>
                    Hoje é dia de vitória!
                </Text>
            </View>
        </View>
    )
}