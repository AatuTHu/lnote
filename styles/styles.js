import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E212B', // Deeper background for better dark mode contrast
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#0F2027',
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2C3539',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  fileDisplay: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  footer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    backgroundColor: '#0F2027',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#2C3539',
  },
  // Buttons
  addNote: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#3A86FF',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#374151',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  // Inputs
  inputTitle: {
    width: '100%',
    backgroundColor: '#2A2E3D',
    color: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#3F4457',
  },
  input: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2A2E3D',
    color: '#FFFFFF',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#3F4457',
    marginBottom: 12,
  },
  // Note List Cards
  noteItem: {
    backgroundColor: '#2A2E3D',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#3F4457',
  },
  noteCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
    marginRight: 10,
  },
  noteDate: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  deleteText: {
    color: '#EF4444',
    fontWeight: '600',
    fontSize: 14,
  },
  deleteDot: {
    width: 25,
    height: 25,
    backgroundColor: 'red',
    borderRadius: 50
  }
});