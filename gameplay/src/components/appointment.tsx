import { Text, View } from "react-native";
import { GestureHandlerRootView, RectButton, RectButtonProps } from "react-native-gesture-handler"
import { layout } from "../styles/layout";
import { GuildIcon } from "./guildIcon";
import { categories } from "../utils/categories";
import { text } from "../styles/text";
import { colors } from "../styles/colors";
import Player from "../assets/player.svg";
import Calendar from "../assets/calendar.svg";

export type GuildProps = {
    id: string;
    name: string;
    icon?: string;
    owner: boolean;
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps;
}

export function Appointment({data, ...rest}: Props){
    const [category] = categories.filter(item => item.id === data.category)

    return (
        <GestureHandlerRootView>
            <RectButton {...rest}>
                <View style={layout.appointment}>
                    <GuildIcon />
                    <View style={layout.appointmentContent}>
                        <View style={layout.appointmentHeader}>
                            <Text style={text.appointmentTitle}>
                                {data.guild.name}
                            </Text>

                            <Text style={text.appointmentCategory}>
                                { category.title }
                            </Text>
                        </View>

                        <View style={layout.appointmentFooter}>
                            <View style={layout.appointmentDateInfo}>
                                <Calendar />
                                <Text style={text.appointmentDateInfo}>
                                    {data.date}
                                </Text>
                            </View>

                            <View style={layout.appointmentPlayersInfo}>
                                <Player
                                    fill={data.guild.owner ? colors.primary : colors.on}
                                    />
                                <Text style={[
                                    text.appointmentPlayers,
                                    {color: data.guild.owner ? colors.primary: colors.on}
                                ]}>
                                    {data.guild.owner ? 'Owner' : 'Guest' }
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </RectButton>
        </GestureHandlerRootView>
    )
}