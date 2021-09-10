//useState é um hook do React.
//Eles existem desde a versão 16.8
import React, { useState } from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      texto: 'Texto Inicial',
      contador: 0
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>{this.state.contador}</Text>
        <Button 
          title="Alterar o texto"
          // onPress={() => this.setState({texto: "Novo texto"})}
          onPress={() => this.setState({contador: this.state.contador + 1})}
        />
      </View>
    )
  }
}

// export default function App() {
//   const [texto, setTexto] = useState('Texto Inicial')
//   return (
//     <View style={styles.container}>
//       <Text>{texto}</Text>
//       <Button 
//         title="Alterar texto"
//         onPress={() => setTexto('Novo texto')}
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
