import { View } from "react-native";
import { layout } from "../../styles/layout";
import Background from "../../components/background";
import { Profile } from "../../components/profile";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../styles/colors";
import { ButtonAdd } from "../../components/buttonAdd";
import { CategorySelect } from "../../components/categorySelect";
import { useState } from "react";


export default function home(){
    const [category, setCategory] = useState('');

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
                    />
                </View>
        </Background>
    )
}