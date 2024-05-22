import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import Background from "../../components/background";
import { Header } from "../../components/header";
import { Feather } from "@expo/vector-icons";
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
import { CategorySelect } from "../../components/categorySelect";
import { useState } from "react";
import { Link } from "expo-router";

export default function AppointmentCreate(){
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
    ];

    const [category, setCategory] = useState('');
    return (
        <Background
            styleName="appointmentDetailsContainer"
        >
            
            <Header 
                title="Schedule a game"
            />

            <Text style={text.label}>
                Category
            </Text>

            <CategorySelect 
                hasCheckBox
                categorySelected={category}
                setCategory={setCategory}
            />

            <View style={layout.form}>
                <Link href='home' asChild>
                    <RectButton>
                    <View style={layout.select}>
                        <View style={layout.imgSelect}/>
                        <View style={layout.selectBody}>
                            <Text style={text.label}>
                                Select the server
                            </Text>
                        </View>
                        <Feather 
                            name="chevron-right"
                            color={colors.heading}
                            size={18}
                        />
                    </View>
                    </RectButton>
                </Link>
            </View>

        </Background>
    )
}