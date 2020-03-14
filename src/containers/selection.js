const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>dfdf
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>

            <Text style={styles.selectionSection}>Selecciona la marca de tarjeta que prefieras </Text>
	  <View style={styles.selectionContainer}>
	  <View style={styles.buttonContainer}>
              <Button
  title="Mastercard"
  type="outline"
/>

 	 </View>
	  <View style={styles.buttonContainer}>
              <Button
  title="Mastercard"
  type="outline"
/>
	  </View>
	  </View>


	
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
    rounded:{
	color:Colors.white,
	borderRadius:20,
	borderWidth: 1,
	
    },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  selectionSection: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '400',
      color: Colors.dark,
      textAlign: 'center',
  },
    highlight: {
	fontWeight: '700',
    },
    selectionContainer:{
	flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
	flex:1,
	paddingLeft:10,
	paddingRight:10,
    },
    footer: {
	color: Colors.dark,
	fontSize: 12,
	fontWeight: '600',
	padding: 4,
	paddingRight: 12,
	textAlign: 'right',
    },

    submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
  },
});
