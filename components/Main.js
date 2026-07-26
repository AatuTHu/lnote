import { Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../styles/styles.js';
import { fetchNotes, deleteNote } from '../database/sqlite.js';

export default function Main({ setPage, setSelectedNote }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const data = await fetchNotes();
    setNotes(data);
  };

  const handleDelete = (id) => {
    Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await deleteNote(id);
          loadNotes();
        },
      },
    ]);
  };

  const handleEdit = (note) => {
    if (setSelectedNote) {
      setSelectedNote(note);
    }
    setPage(2);
  };

  return (
    <>
      <View style={styles.fileDisplay}>
        <FlatList
          data={notes}
          keyExtractor={(item, index) => item?.id ? item.id.toString() : index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleEdit(item)} activeOpacity={0.7}>
              <View style={styles.noteItem}>
                <View style={styles.noteCardHeader}>
                  <Text style={styles.noteTitle}>{item.title || 'Untitled'}</Text>
                  <TouchableOpacity style={styles.deleteDot} onPress={() => handleDelete(item.id)} />
                </View>
                <Text style={styles.noteDate}>{item.created_at}</Text>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', marginTop: 40, color: '#b2bac7' }}>
              No notes yet
            </Text>
          }
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addNote}
          onPress={() => {
            if (setSelectedNote) setSelectedNote(null);
            setPage(2);
          }}
        >
          <Text style={styles.buttonText}>New note</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}