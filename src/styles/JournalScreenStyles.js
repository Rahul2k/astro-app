import { StyleSheet } from "react-native";

export const journalScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
        fontFamily: "Tiro-Italic"
    },
    card: {
        marginBottom: 16,
        borderRadius: 8,
    },
    journalStyle:{
        fontFamily: "Tiro-Italic",
        fontSize:20,
    },
    journalButtonText : {
        fontFamily: "Tiro-Italic",
        color:"#000"
    },
    labelStyle: {
        marginTop: 5,
        marginBottom: 0,
        textAlignVertical: 'top',
        fontFamily: "Tiro-Italic",
        color:"grey"
    },
    input: {
        marginTop: 5,
        marginBottom: 0,
        textAlignVertical:"top",
        fontFamily: "Tiro-Italic",
    },
    journalButton: {
        marginTop: 10,
        color:"#fff",
        backgroundColor:"rgba(245, 205, 169, 1)",
        borderColor: "rgba(245, 205, 169, 1)",
        fontFamily:"Tiro-Italic",
    },
    listContainer: {
        marginTop: 16,
    },
    listHeader: {
        marginBottom: 12,
        fontFamily: "Tiro-Italic",
        fontSize: 30,
    },
    entryCard: {
        marginBottom: 12,
    },
    entryDate: {
        fontFamily: "Tiro-Italic",
        fontSize:16,
        marginBottom: 5,
    },
    journalEntry: {
        fontFamily: "Tiro-Italic",
        fontSize:14,
    },
});