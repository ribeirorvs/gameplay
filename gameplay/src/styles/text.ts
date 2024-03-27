import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const text = StyleSheet.create({
    title : {
        color: colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: fonts.title700,
        lineHeight: 40
    },
    subtitle: {
        color: colors.heading,
        fontSize: 15,
        textAlign: "center",
        marginBottom: 64,
        fontFamily: fonts.title500,
        lineHeight: 25
    },
    buttonText: {
        flex: 1,
        color: colors.heading,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: fonts.text500
    },
    greeting: {
        fontFamily: fonts.title500,
        fontSize: 24,
        color: colors.heading,
        marginRight: 5
    },
    username: {
        fontFamily: fonts.title700,
        fontSize: 24,
        color: colors.heading
    },
    message: {
        fontFamily: fonts.text400,
        color: colors.highlight
    },
    categoryTitle: {
        fontFamily: fonts.title700,
        color: colors.heading,
        fontSize: 15
    },
    listHeaderTitle: {
        fontFamily: fonts.title700,
        color: colors.heading,
        fontSize: 18
    },
    listHeaderSubtitle: {
        fontFamily: fonts.text400,
        color: colors.highlight,
        fontSize: 13
    },
    appointmentTitle: {
        fontFamily: fonts.title700,
        color: colors.heading,
        fontSize: 18
    },
    appointmentCategory: {
        fontFamily: fonts.text400,
        color: colors.highlight,
        fontSize: 13,
        marginRight: 24
    },
    appointmentDateInfo: {
        fontFamily: fonts.text500,
        color: colors.heading,
        fontSize: 13,
        marginLeft: 7
    },
    appointmentPlayers: {
        fontFamily: fonts.text500,
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24
    }
})