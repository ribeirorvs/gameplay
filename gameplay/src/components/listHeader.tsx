import { Text, View } from "react-native";
import { layout } from "../styles/layout";
import { text } from "../styles/text";

type Props = {
    title: string;
    subtitle: string;
}

export function ListHeader({title, subtitle}: Props){
    return (
        <View style={layout.listHeader}>
            <Text style={text.listHeaderTitle}>
                {title}
            </Text>
            <Text style={text.listHeaderSubtitle}>
                {subtitle}
            </Text>
        </View>
    )
}