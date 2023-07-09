import React from 'react';
import {FlatList, ScrollView, Text} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {categories} from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';

const Home = () => {
  const renderCategoryItem = ({item, index}) => {
    return <CategoryBox title={item?.title} image={item?.image} />;
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {/* Header */}
        <Header showSearch title="Find all you need here" />

        {/* List of cateogies */}
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.list}
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
