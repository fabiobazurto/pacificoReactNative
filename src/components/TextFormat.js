import Colors from '../components/Colors';
import { StyleSheet} from 'react-native';

const TextFormat = StyleSheet.create({
    small:{
        fontSize:12,
    },
    normal:{
	fontSize:15,
	color: Colors.black,
    },
    paragraph: {
	color:Colors.black,
	fontSize: 13,
    },

    lightParagraph:{
	color: Colors.lightBlack,
    },
    lightText:{
        color: Colors.white
    },
    mainTitleBlack:{
	fontSize: 20,
	marginTop: 8,
	fontWeight: "bold",
    },
    textCenter:{
	textAlign: 'center',
    },
    highlight: {
	fontWeight: '700',
    },
    secondaryTitleBlue:{
	fontSize:16,
	color: Colors.lightBlue,
	marginTop:8,
	fontWeight: "bold",
    }
});
export default TextFormat;
