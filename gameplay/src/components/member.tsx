import { View, Text } from "react-native";
import { Avatar } from "./avatar";
import { text } from "../styles/text";
import { layout } from "../styles/layout";
import { colors } from "../styles/colors";

export type MemberProps ={
    id: string;
    username: string;
    avatarUrl: string;
    status: string;
}

type Props = {
    data: MemberProps
}

export function Member({data }: Props){
    const isOnline = data.status ==='online';
    return (
        <View style={layout.memberContainer}>
            <Avatar 
                urlImage={data.avatarUrl}
            />
            <View>
                <Text 
                    style={text.title}
                >
                    {data.username}
                </Text>
                <View style={layout.memberStatus}>
                    <View 
                        style={[
                            layout.bulletStatus,
                            {
                                backgroundColor: isOnline ? colors.on : colors.primary
                            }
                        ]}
                    />
                    <Text style={text.nameStatus}>
                        {isOnline? 'Online' : 'Offiline'}
                    </Text>
                </View>
            </View>
        </View>
    )
}