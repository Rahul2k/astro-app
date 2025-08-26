import { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { getToday } from '../utils/date';
import { ZODIAC_BACKGROUNDS, ZODIAC_SIGNS_ENUM, ZODIAC_SYMBOLS_ENUM } from '../utils/Constants';
import { Button, Card, Layout, Select, SelectItem, Text, Spinner, IndexPath } from '@ui-kitten/components';
import {default as sandboxApiResponse} from "../utils/zodiacSandboxResponse.json";
import { homeScreenStyles as styles } from '../styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
    const [selectedZodiacIndex, setSelectedZodiacIndex] = useState(new IndexPath(0));
    const [horoscope, setHoroscope] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const today = getToday();
    const selectedZodiacSign = (ZODIAC_SIGNS_ENUM[selectedZodiacIndex.row]).toString() + " " + (ZODIAC_SYMBOLS_ENUM[selectedZodiacIndex.row]).toString();

    const backgroundImage = ZODIAC_BACKGROUNDS[selectedZodiacIndex.row];

    useEffect(() => {
        try {
            setLoading(true);
            setError(null);
            setHoroscope({...sandboxApiResponse.response[(ZODIAC_SIGNS_ENUM[selectedZodiacIndex.row]).toString()]});
        } catch (e) {
            setError('Failed to fetch horoscope. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, [selectedZodiacSign]);

    const renderHoroscope = () => {
        if (loading) {
            return (
                <Layout style={styles.spinnerContainer}>
                <Spinner size="large" />
                </Layout>
            );
        }
        if (error) {
            return <Text style={styles.errorText} category="h6">{error}</Text>;
        }
        if (horoscope) {
            return (
                <>
                    <Text style={styles.horoscopeText}>Born between {horoscope.date_range}, {horoscope.description}</Text>
                    <Text style={styles.horoscopeText}>You will be most compatibile with a {horoscope.compatibility} and your mood today would be {horoscope.mood}</Text>
                    <Text style={styles.horoscopeText}>Your today's Lucky colour  is {horoscope.color}</Text>
                    <Text style={styles.horoscopeText}>Your today's Lucky Number is {horoscope.lucky_number} and Lucky Time is {horoscope.lucky_time}</Text>
                </>
            );
        }
        return null;
    };
    return (
            <Layout style={styles.container}>
                <Text style={styles.homescreenTitle}>{today}</Text>
                <Card style={styles.card}>
                    <Text category="s1" style={styles.horoscopeText}>What's your Sun Sign (Zodiac) ? </Text>
                    <View style={styles.pickerContainer}>
                        <Select
                            selectedIndex={selectedZodiacIndex}
                            onSelect={index => setSelectedZodiacIndex(index)}
                            value={selectedZodiacSign}
                            style={styles.pickerContainer}
                        >
                            {Object.keys(ZODIAC_SIGNS_ENUM).map((sign) => (
                                <SelectItem style={styles.pickerContainer} key={ZODIAC_SIGNS_ENUM[sign]} title={(ZODIAC_SIGNS_ENUM[sign]).toString() + " " + (ZODIAC_SYMBOLS_ENUM[sign]).toString()} />
                            ))}
                        </Select>
                    </View>
                </Card>

                <Card style={styles.horoscopeCard}>
                    <ImageBackground 
                        source={backgroundImage} 
                        style={styles.cardImageBackground}
                        imageStyle={styles.cardBackgroundImageStyle}
                    >
                        <Text style={styles.horoscopeTitle}>Let's see what's in it for {selectedZodiacSign} today </Text>
                        {renderHoroscope()}
                        <Text style={styles.horoscopeText}>Have a great day, and don't forget to journal your day's event today :{')'}</Text>
                    </ImageBackground>
                </Card>

                <Button
                    onPress={() => navigation.navigate('Journal')}
                    style={styles.button}
                >
                    <Text style={styles.horoscopeText}>Write in today's Journal</Text>
                </Button>
            </Layout>
        
    );
};

export default HomeScreen;
