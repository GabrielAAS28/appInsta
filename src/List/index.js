import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function List(props) {
  function carregaIcon(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  }

  function contadorLike(likers) {
    if (likers === 0) {
      return;
    }
    return (
      <Text style={styles.likes}>
        {likers} {likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.viewPerfil}>
        <Image source={{uri: props.data.imgperfil}} style={styles.fotoPerfil} />
        <Text style={styles.usuarioNome}>{props.data.nome}</Text>
      </View>

      <Image
          resizeMode="cover"
          source={{uri: props.data.imgPublicacao}}
          style={styles.fotoPublicacao}
        />

      <View style={styles.areaButton}>
        <TouchableOpacity>
          <Image
            source={carregaIcon(props.data.likeada)}
            style={styles.inconFooter}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSpace}>
          <Image
            source={require('../img/comment.png')}
            style={styles.inconFooter}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSpace}>
          <Image
            source={require('../img/send.png')}
            style={styles.inconFooter}
          />
        </TouchableOpacity>
      </View>

      {contadorLike(props.data.likers)}

      <Text style={styles.nomeFooter}>{props.data.nome}</Text>
      <Text style={styles.descFooter}>{props.data.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  usuarioNome: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000',
  },
  fotoPublicacao: {
    height: 400,
    alignItems: 'center',
  },

  areaButton: {
    flexDirection: 'row',
    padding: 5,
  },
  inconFooter: {
    width: 25,
    height: 25,
  },
  btnSpace: {
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  nomeFooter: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  descFooter: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15,
  },
});
