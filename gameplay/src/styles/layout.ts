import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const layout = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    simpleContainer: {
        flex: 1
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
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 26,
        marginBottom: 42
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row'
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 22
    },
    buttonAdd: {
        height: 48,
        width: 48,
        backgroundColor: colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center'
    },
    category: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    categoryContent: {
        width: 100,
        height: 116,
        backgroundColor: colors.secondary40,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7
    },
    uncheck: {
        width: 12,
        height: 12,
        backgroundColor: colors.secondary100,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderColor: colors.secondary50,
        borderWidth: 3,
        borderRadius: 3
    },
    checked: {
        width: 10,
        height: 10,
        backgroundColor: colors.primary,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderRadius: 3
    },
    categorySelect: {
        minHeight: 120,
        minWidth: 120,
        paddingLeft: 24
    },
    homeContent: {
        marginTop: 42
    },
    listHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24
    },
    appointment: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    appointmentContent: {
        flex: 1
    },
    appointmentHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    appointmentFooter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    appointmentDateInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    appointmentPlayersInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    matches: {
        marginTop: 24,
        marginLeft: 24
    },
    listDivider: {
        width: '80%',
        height: 1,
        backgroundColor: colors.secondary40,
        marginVertical: 21,
        alignSelf: 'flex-end'
    }
});