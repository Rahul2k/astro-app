import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function useCachedResources() {
  const [fontsLoaded, fontError] = useFonts({
      'Tiro-Regular': require('../../assets/fonts/TiroDevanagariHindi-Regular.ttf'),
      'Tiro-Italic': require('../../assets/fonts/TiroDevanagariHindi-Italic.ttf'),
  });

  useEffect(() => {
    if (fontError) {
      console.warn("An error occurred while loading fonts:", fontError);
    }
  }, [fontError]);

  return fontsLoaded;
}