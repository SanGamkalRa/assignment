import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

const Home = () => {
  const [data, setData] = useState('');

  const fetchApi = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        setData(res.products);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        ListHeaderComponent={() => (
          <View>
            <Text style={{color: 'black'}}>List of data</Text>
          </View>
        )}
        renderItem={({item, index}) => (
          <View style={{marginVertical: 10}}>
            <Text style={{color: 'black'}}>{item.brand}</Text>
            <Text style={{color: 'black'}}>{item.category}</Text>
            <Text style={{color: 'black'}}>{item.brand}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
