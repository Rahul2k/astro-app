import { StyleSheet } from "react-native";

export const homeScreenStyles = StyleSheet.create({
    card: {
        marginBottom: 16,
        marginTop:10,
        padding: 0,
        borderRadius: 8, 
        overflow: 'hidden', 
    },
    horoscopeCard: {
        minHeight: '60%',
        marginBottom: 16,
        padding: 0,
        borderRadius: 8, 
        overflow: 'hidden',
    },
    cardBackgroundImageStyle: {
        resizeMode: 'cover',
        minWidth: '100%',
        minHeight: '100%',
        opacity: 0.19
    },
    backgroundImage: {
        flex:1,
        padding:0,
        minHeight: '100%',
        minWidth: '100%'
    },
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        textAlign: 'center',
        marginBottom: 16,
    },
    pickerLabel: {
        marginBottom: 8,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#E4E9F2',
        borderRadius: 4,
        backgroundColor: '#F7F9FC',
        fontFamily:"Tiro-Italic",
    },
    picker: {
        height: 50,
        width: '100%',
    },
    button: {
        marginTop: 8,
        backgroundColor:"rgba(245, 205, 169, 1)",
        borderColor: "rgba(245, 205, 169, 1)",
        fontFamily:"Tiro-Italic",
    },
    spinnerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    horoscopeTitle: {
        fontSize: 30,
        marginBottom: 4,
        fontFamily:"Tiro-Italic",
    },
    horoscopeText: {
        marginBottom: 4,
        fontSize:20,
        fontFamily:"Tiro-Italic",
    },
    homescreenTitle: {
        marginBottom: 4,
        fontSize:30,
        justifyContent: "center",
        textAlign:"center",
        fontFamily:"Tiro-Italic",
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
});