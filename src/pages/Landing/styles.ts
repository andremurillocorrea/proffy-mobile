import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 30,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain', // mantém o scale garantindo que todo conteudo é visivel
  },

  title: {
    color: '#FFF',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 30,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    height: 120,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 18,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: '#9871F5'
  },

  buttonSecondary: {
    backgroundColor: '#04D361',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 18,
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  }


});

export default styles;