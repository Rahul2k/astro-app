import { useState, useContext, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Button, Input, Card, Text } from '@ui-kitten/components';
import { JournalContext } from '../context/JournalContext';
import { getToday } from '../utils/date';
import { journalScreenStyles as styles } from '../styles/JournalScreenStyles';

const JournalScreen = ({ navigation }) => {
  const { entries, saveEntry } = useContext(JournalContext);
  const today = getToday();
  const [text, setText] = useState('');

  useEffect(() => {
    const entryForToday = entries[today];
    if (entryForToday) {
      setText(entryForToday);
    } else {
      setText('');
    }
  }, [entries, today]);

  const entryExistsForToday = !!entries[today];
  const buttonText = entryExistsForToday ? 'Update Journal Entry' : 'Add Journal Entry';

  const handleSave = () => {
    saveEntry(today, text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <Card style={styles.card}>
            <Text style={styles.journalStyle}>Journal for {today}</Text>
            <Input
              label={evaProps => (
                <Text {...evaProps} style={styles.labelStyle}>
                  Write your thoughts...
                </Text>
              )}
              value={text}
              onChangeText={setText}
              multiline
              style={styles.input}
              placeholder='Today, I did ...'
              textStyle={{ minHeight: 150, ...styles.input}}
            />
            <Button textStyle={styles.journalButton} onPress={handleSave} style={styles.journalButton}>
              {buttonText}
            </Button>
        </Card>

        <View style={styles.listContainer}>
          <Text style={styles.listHeader}>All Entries</Text>
          {Object.keys(entries).length > 0 ? (
            Object.entries(entries)
              .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
              .map(([date, entry]) => (
                <Card key={date} style={styles.entryCard}>
                  <Text style={styles.entryDate}>{date}</Text>
                  <Text style={styles.journalEntry}>{entry}</Text>
                </Card>
              ))
          ) : (
            <Text>No entries found. Write your first one above!</Text>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default JournalScreen;