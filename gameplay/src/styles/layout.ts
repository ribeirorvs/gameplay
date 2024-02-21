import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const layout = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    buttonContainer: {
        width: '100%',
        height: 56,
        backgroundColor: colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: colors.line
    }
});