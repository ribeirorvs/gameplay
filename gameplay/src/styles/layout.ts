import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const layout = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
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
        height: 122,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        marginRight: 8
    },
    categoryContent: {
        width: 100,
        height: 116,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    uncheck: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 12,
        height: 12,
        backgroundColor: colors.secondary100,
        borderColor: colors.secondary50,
        borderWidth: 3,
        borderRadius: 3
    },
    checked: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 10,
        height: 10,
        backgroundColor: colors.primary,
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
        width: '78%',
        height: 1,
        backgroundColor: colors.secondary40,
        marginVertical: 31,
        alignSelf: 'flex-end',
        marginTop: 2
    },
    appointmentDetails: {
        width: '100%',
        height: 104,
        padding: 2
    },
    headerAppointment: {
        width: "100%",
        height: 104,
        paddingTop: 26,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    appointmentDetailsContainer: {
        flex: 1
    },
    appointmentDetailsBannerContent:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    appointmentDetailsFooter: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: 50
    },
    members: {
        marginLeft: 24,
        marginTop: 24
    },
    memberContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    bulletStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 10
    },
    memberStatus: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        width: '100%',
        flexDirection: 'row',
        height: 68,
        borderColor: colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',
    },
    imgSelect: {
        width: 64,
        height: 68,
        backgroundColor: colors.secondary50,
        borderWidth: 1,
        borderRadius: 8
    }
});