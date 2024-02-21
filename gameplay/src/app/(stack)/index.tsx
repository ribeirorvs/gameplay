import {
    View,
    Text,
    Image,
} from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import { layout } from '../../styles/layout';
import { img } from '../../styles/imgs';
import { text } from '../../styles/text';
import { ButtonIcon } from '../../components/buttonIcon';

export default function SignIn(){
    return(
        <View style={layout.container}>
            <Image 
                source={IllustrationImg} 
                style={img.image}
                resizeMode="stretch"
            />
            <View style={layout.content} >
                <Text style={text.title}>
                    Conecte-se{'\n'}
                    e organize suas{'\n'}
                    jogatinas
                </Text>
                <Text style={text.subtitle}>
                    Crie grupos para jogar seus games{'\n'}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon 
                    title='Entrar com Discord'
                />
            </View>
        </View>
    )
}