import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const text = StyleSheet.create({
    title : {
        color: colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontWeight: "bold"
    },
    subtitle: {
        color: colors.heading,
        fontSize: 15,
        textAlign: "center",
        marginBottom: 64
    },
    buttonText: {
        flex: 1,
        color: colors.heading,
        fontSize: 15,
        textAlign: 'center'
    }
})