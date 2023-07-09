import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {categories} from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';
import {products} from '../../../data/products';
import ProductHomeItem from '../../../components/ProductHomeItem';

const Home = () => {

  // component for category Items
  const renderCategoryItem = ({item, index}) => {
    return (
      <CategoryBox
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };

  // component for product items
  const renderProductItem = ({item}) => {
    return <ProductHomeItem {...item} />;
  };

  return (
    <SafeAreaView>
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

      {/* List of Products */}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => String(item.id)}
        style={styles.productList}
        numColumns={2}
        ListFooterComponent={<View style={{height: 100}} />}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
