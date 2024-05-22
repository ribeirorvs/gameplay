import { BorderlessButton } from "react-native-gesture-handler";
import Background from "../../components/background";
import { Header } from "../../components/header";
import { Fontisto } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import { FlatList, ImageBackground, Text, View } from "react-native";
import banner from "../../assets/banner.png";
import { img } from "../../styles/imgs";
import { text } from "../../styles/text";
import { layout } from "../../styles/layout";
import { ListHeader } from "../../components/listHeader";
import { Member } from "../../components/member";
import { ListDivider } from "../../components/listDivider";
import { ButtonIcon } from "../../components/buttonIcon";

export default function AppointmentDetails(){
    const members = [
        {
            id: '1',
            username: 'user1',
            avatarUrl: 'https://github.com/ribeirorvs.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'user2',
            avatarUrl: 'https://github.com/ribeirorvs.png',
            status: 'off'
        },
        {
            id: '3',
            username: 'user3',
            avatarUrl: 'https://github.com/ribeirorvs.png',
            status: 'off'
        },
        {
            id: '4',
            username: 'user4',
            avatarUrl: 'https://github.com/ribeirorvs.png',
            status: 'online'
        }
    ]
    return (
        <Background
            styleName="appointmentDetailsContainer"
        >
            
            <Header 
                title="Details"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground 
                source={banner}
                style={img.appointmentBanner}
            >
                <View style={layout.appointmentDetailsBannerContent}>
                    <Text style={text.appointmentDetailsTitle}>
                        Legendaries
                    </Text>
                    <Text style={text.appointmentDetailsSubtitle}>
                        Today is the day we reach the challenger without losing a single game of MD10.
                    </Text>
                </View>
            </ImageBackground>
            
            <ListHeader 
                title="Players"
                subtitle="Total 4"
            />

            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Member
                        data={item}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={layout.members}
            />
            
            <View style={layout.appointmentDetailsFooter}>
                <ButtonIcon 
                    title="Join the game"
                    url="index"
                />
            </View>
        </Background>
    )
}