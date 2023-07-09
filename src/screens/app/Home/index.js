import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {categories} from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';
import {products} from '../../../data/products';
import ProductHomeItem from '../../../components/ProductHomeItem';

const Home = () => {
  // Selected Category from Category Items
  const [selectedCategory, setSelectedCategory] = useState();

  // Search keyword
  const [keyword, setKeyword] = useState();

  // Show All products first, then filter
  const [filteredProduct, setFilteredProduct] = useState(products);

  console.log('keyword', keyword);

  // each time user selects Category
  useEffect(() => {
    // filter by only category
    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(
        product => product?.category === selectedCategory,
      );
      setFilteredProduct(updatedProducts);
    }
    // Filter by category and keyword
    else if (selectedCategory && keyword) {
      const updatedProducts = products.filter(
        product =>
          product?.category === selectedCategory &&
          product?.title?.toLowerCase().includes(keyword.toLowerCase()),
      );
      setFilteredProduct(updatedProducts);
    }
    // Filter by only keywrod
    else if (!selectedCategory && keyword) {
      const updatedProducts = products.filter(product =>
        product?.title?.toLowerCase().includes(keyword.toLowerCase()),
      );
      setFilteredProduct(updatedProducts);
    } else {
      // otherwise, display all products
      setFilteredProduct(products);
    }
  }, [selectedCategory, keyword]);

  // component for category Items
  const renderCategoryItem = ({item, index}) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
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
      <Header
        showSearch
        onSearch={setKeyword}
        keyword={keyword}
        title="Find all you need here"
      />

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
        data={filteredProduct}
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
