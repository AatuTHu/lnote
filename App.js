import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles/styles.js';
import Main from './components/Main.js';
import AddNew from './components/AddNew.js';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [page, setPage] = useState(1);
  const [selectedNote, setSelectedNote] = useState(null);

  const renderer = () => {
    switch (page) {
      case 1:
        return (
          <Main
            page={page}
            setPage={setPage}
            setSelectedNote={setSelectedNote}
          />
        );
      case 2:
        return (
          <AddNew
            page={page}
            setPage={setPage}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
        <View style={styles.header}>
          <Text style={{ color: '#fff', fontSize: 25 }}>$4.99/Lightweight Notes</Text>
          <Text style={{ color: '#dadada', fontSize: 13 }}>Where do I pay?</Text>
        </View>

        {renderer()}

        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}