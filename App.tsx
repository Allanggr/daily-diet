import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { Loading } from './src/components/Loading';
import { Routes } from 'src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });
  
  return (
    <ThemeProvider theme={theme}>
        {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}