import Colors from '../components/Colors';
import { StyleSheet} from 'react-native';

const Layout = StyleSheet.create({
    container:{
	flex:1,
	marginLeft: 15,
	marginRight: 15,
    },
    row:{
	flex: 1,
        flexDirection: 'row',
	paddingLeft:10,
	paddingRight:10,
	width:"100%",
	
    },
    textCenter:{
        alignItems: 'center',
        justifyContent: 'center',
    },	
    col:{
	flex:1,
	paddingLeft:10,
	paddingRight:10,
    },
    verticalSpacing:{
	marginTop:5,
	marginBottom:5,
    },
    card:{
	marginLeft: 25,
	marginRight:25,
    }
    
});

export default Layout;
