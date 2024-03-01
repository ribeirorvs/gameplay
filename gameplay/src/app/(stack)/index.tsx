import { useCallback } from 'react';
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
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import * as SplashScreen from 'expo-splash-screen';
import Background from '../../components/background';

SplashScreen.preventAutoHideAsync();

export default function SignIn(){
    const [fontsLoaded, fontsError] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Rajdhani_500Medium,
        Rajdhani_700Bold
    })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded || fontsError){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontsError]);

    if (!fontsLoaded && !fontsError){
        return null;
    }

    return(
        <Background
            styleName="container"
        >
            <Image 
                source={IllustrationImg} 
                style={img.image}
                resizeMode="stretch"
            />
            <View style={layout.content} onLayout={onLayoutRootView}>
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
        </Background>
    )
}