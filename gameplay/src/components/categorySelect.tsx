import { ScrollView } from "react-native";
import { categories } from "../utils/categories";
import { Category } from "./category";
import { layout } from "../styles/layout";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

export function CategorySelect({
        categorySelected,
        setCategory,
        hasCheckBox = false
}: Props){
    return (
        <ScrollView
            horizontal
            style={layout.categorySelect}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >
            {
                categories.map( category => (
                    <Category 
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        hasCheckBox = {hasCheckBox}
                        checked={category.id === categorySelected}
                        onPress={()=> setCategory(category.id)}
                    />
                ))
            }
            
        </ScrollView>
    );
}