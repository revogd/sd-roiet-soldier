import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';


const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
    <Searchbar 
      placeholder="ค้นหา"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'top',
      paddingTop: 10,
      paddingBottom: 10,
    }, 
});    
export default Search;


