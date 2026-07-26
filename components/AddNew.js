import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../styles/styles.js';
import { insertNote, updateNote } from '../database/sqlite.js';

export default function AddNew({ setPage, selectedNote, setSelectedNote }) {
  const [title, setTitle] = useState(selectedNote ? selectedNote.title || '' : '');
  const [text, onChangeText] = useState(selectedNote ? selectedNote.content : '');

  useEffect(() => {
    setTitle(selectedNote ? selectedNote.title || '' : '');
    onChangeText(selectedNote ? selectedNote.content || '' : '');
  }, [selectedNote]);

  const saveOrUpdate = async () => {
    if (text.trim().length > 0 || title.trim().length > 0) {
      if (selectedNote) {
        await updateNote(selectedNote.id, title, text);
      } else {
        await insertNote(title, text);
      }
    }
    if (setSelectedNote) setSelectedNote(null);
    setPage(1);
  };

  const onCancel = () => {
    if (setSelectedNote) setSelectedNote(null);
    setPage(1);
  };

  return (
    <>
      <View style={styles.fileDisplay}>
        <TextInput
          style={styles.inputTitle}
          onChangeText={setTitle}
          value={title}
          underlineColorAndroid="transparent"
          placeholder="Title..."
          placeholderTextColor="#9CA3AF"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          underlineColorAndroid="transparent"
          multiline={true}
          placeholder="Type your note here..."
          placeholderTextColor="#9CA3AF"
          textAlignVertical="top"
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addNote} onPress={saveOrUpdate}>
          <Text style={styles.buttonText}>
            {selectedNote ? 'Update note' : 'Add note'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}