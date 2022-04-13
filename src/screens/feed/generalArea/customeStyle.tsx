import { StyleSheet } from "react-native";

    const styles = StyleSheet.create({
        title: {
            fontSize:30,
            fontWeight: "bold",
            backgroundColor:"#6495ed",
            marginHorizontal:8,
            marginVertical:8,
            paddingVertical:4,
            paddingHorizontal:4,
            borderRadius: 6,
        },
        titleOpen: {
            fontSize:30,
            fontWeight: "bold",
            backgroundColor:"#6495ed",
            // marginHorizontal:8,
            marginVertical:8,
            paddingVertical:4,
            paddingHorizontal:4,
            // borderRadius: 6,
        },
        container:{
            // backgroundColor:"#E2E9EB",
            color:"#050C0E",
            fontSize:23,
            borderColor: "#0000cd",
            borderRadius: 10,
            borderWidth:0.5,
            marginHorizontal:8,
            marginVertical:6,
            paddingVertical:10,
            paddingHorizontal:8,
        },
        item:{
            fontSize:20,
            marginHorizontal:8,
            marginVertical:4,
            paddingVertical:2,
            paddingHorizontal:4,
            
        },
        styleWelcome:{
            color: "#0000cd",
            fontSize:20,
            paddingVertical:10,
            paddingHorizontal:10,
            alignItems: "center",
            justifyContent: "center",
            
        },
        styleMailText:{
            fontSize: 20,
             textAlign: 'center',
             marginTop:4
        }
        
    })
    export {styles}