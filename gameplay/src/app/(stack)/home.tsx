import { FlatList, Text, View } from "react-native";
import { layout } from "../../styles/layout";
import Background from "../../components/background";
import { Profile } from "../../components/profile";
import { ButtonAdd } from "../../components/buttonAdd";
import { CategorySelect } from "../../components/categorySelect";
import { useState } from "react";
import { ListHeader } from "../../components/listHeader";
import { Appointment } from "../../components/appointment";
import { ListDivider } from "../../components/listDivider";


export default function home(){
    const [category, setCategory] = useState('');
    const appointments =[
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: "",
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: "",
                owner: false
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory(''): setCategory(categoryId)
    }

    return (
        <Background
            styleName="simpleContainer"
        >
            <View style={layout.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <View>
                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                    hasCheckBox={true}
                />
            </View>
            <View style={layout.homeContent}>
                <ListHeader
                    title="Partidas agendadas"
                    subtitle="Total 6"
                />
                <FlatList 
                    data={appointments}
                    keyExtractor={item => item.id}
                    style={layout.matches}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider />}
                    renderItem={({ item }) => (
                        <Appointment data={item}/>
                    )}
                />
            </View>
        </Background>
    )
}